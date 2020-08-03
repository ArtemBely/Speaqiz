import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import Teach from '../models/regteacher';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Profile from '../../components/Profile';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';

const router = express.Router();

router.get('/', isLoggedIn, (req, res, next) => {

  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Profile />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Мой рейтинг</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                   <link rel="shortcut icon" href="/images/astronaut-3.ico" type="image/x-icon">
                    <script src='/bundle.js' defer></script>
                      <script>window.__INITIAL_DATA__= ${serialize(data)}</script>
                        <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                         <script>window.__INITIAL_USER__= ${serialize(user)}</script>
                          <title>Практикуй английский</title>
                        </head>
                      <body>
                     <div id="app">
                   ${markup}
                </div>
              </body>
          </html>`
    );
  }).catch(next)
});

router.post('/', async (req, res, next) => {
  var scores = req.body.scores;
  var rait = req.body.rait;

  let user = req.user;
  user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
  let teacher = user.teacher;

  let exactTeacher = await Teach.find({teach: 'teacher'});
  let exact2 = exactTeacher.filter(mail => mail.email === teacher)[0];

  let raiting = exact2.raiting;
  raiting.push(scores);
  let feedback = exact2.feedback;
  feedback.push(rait);

  try {
    exact2 = await exact2.save();
    user = await user.save();
    console.log(exact2);
    res.redirect('/profile');
  }
  catch {
    err => console.log(err);
    res.redirect('/profile');
  }
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
