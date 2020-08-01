import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import mongoose from 'mongoose';
import Thema from '../models/thema.js';
import Part from '../models/part.js';
import Part1 from '../../components/Part1';
import Tasks from '../../components/Tasks';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/profile');
})

router.get('/:id', (req, res, next) => {

  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Part1 />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>hablando</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                   <link rel="shortcut icon" href="/images/astronaut-3.ico" type="image/x-icon">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
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

router.get('/:id/:pathParam1', (req, res, next) => {

  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Tasks />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>hablando</title>
                  <link rel="stylesheet" type="text/css" href="../../main.css">
                   <link rel="shortcut icon" href="/images/astronaut-3.ico" type="image/x-icon">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
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

  let user = req.user;

  var name = user.name;
  var lastname = user.lastname;
  var email = user.email;
  var teacher = user.teacher;
  var school = user.school;
  var subject = user.subject;
  var password = user.password;
  var teach = user.teach;
  var padavans = user.padavans;

  var themes = new Thema({
    themes: req.body.themes,
    parts: req.body.parts
  });

  user.themes.push(themes);

  try {
    user = await user.save();
    console.log(user);
    res.redirect('/profile');
  }
  catch {
     err => console.log(err);
   }
});

router.post('/:id', async (req, res, next) => {
  let user = req.user;

  var name = user.name;
  var lastname = user.lastname;
  var email = user.email;
  var teacher = user.teacher;
  var school = user.school;
  var subject = user.subject;
  var password = user.password;
  var teach = user.teach;
  var padavans = user.padavans;
  var themes = user.themes;

  let newThema = themes.filter(the => the.themes === req.params.id);
  let newPart = newThema[0].parts;

  let parts = new Part({
    parts: req.body.parts,
    title: req.body.title,
    theory: req.body.theory
  });

  newPart.push(parts);

   try {
     user.markModified('themes');
     user = await user.save(user);
     console.log(user);
     res.redirect('/themes/' + req.params.id);
   }
   catch {
     err => console.log(err)
   }
});

export default router;
