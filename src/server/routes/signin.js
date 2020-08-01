import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Enter from '../../components/Enter';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';

const router = express.Router();

router.get('/', notLoggedIn, (req, res, next) => {
  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const errors = req.flash('errors');
    const enter = renderToString(
      <StaticRouter>
           <Enter />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
            <html>
                <head>
                   <title>Speaqiz - Регистрация</title>
                      <link rel="stylesheet" type="text/css" href="main.css">
                      <link rel="shortcut icon" href="/images/astronaut-3.ico" type="image/x-icon">
                         <meta name="viewport" content="width=device-width, initial-scale=1">
                            <script src='bundle.js' defer></script>
                               <script>window.__INITIAL_MESSAGE__ = ${serialize(errors)}</script>
                                 <script>window.__INITIAL_COND__ = ${serialize(cond)}</script>
                                 <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
                                <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                               </head>
                             <body>
                           <div id="app">
                        ${enter}
                  </div>
              </body>
        </html>
      `
    )
  }).catch(next)
});

router.post('/',
    passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
  })
);

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
