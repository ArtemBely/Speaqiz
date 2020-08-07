import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import MyClasses from '../../components/MyClasses';
import Separate from '../../components/Separate';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';
import Block from '../models/locked.js';

const router = express.Router();

router.get('/:id', (req, res, next) => {
  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <MyClasses />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Мои классы</title>
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
         <Separate />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Изучайте языки вместе со speaqiz</title>
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

router.get('/:id/:pathParam1/:pathParam2', (req, res, next) => {
  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Separate />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Изучайте языки вместе со speaqiz</title>
                  <link rel="stylesheet" type="text/css" href="../../../main.css">
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

router.post('/:id/:pathParam1', async (req, res, next) => {

  let user = req.user;
  if(req.body.checking < 2) {
      user.scores = user.scores + 1;
        user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
         user.completed.push(req.body.completed);
        let newUser = user.locked.filter(use => use.date === new Date().getDate());
      user.locked = newUser;
    user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
   }
   else {
     let locked = new Block({
       name: req.body.completed,
       date: new Date().getDate()
     });
     let newer = user.locked.filter(use => typeof use != 'string' && use.date === new Date().getDate());
       user.locked = newer;
         user.locked.push(locked);
         user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
      console.log(user.completed);
   }

  try {
    user = await user.save();
    console.log(user, req.body.checking);
    res.redirect('/students/' + req.params.id + '/' + req.params.pathParam1);
  }
  catch {
    err => console.log(err);
  }
});

export default router;
