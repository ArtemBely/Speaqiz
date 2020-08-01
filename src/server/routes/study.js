import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import Student from '../../components/Student';
import Teach from '../models/regteacher.js';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { getClass } from '../../components/fetchData';

const router = express.Router();

router.get('/', notLoggedIn, (req, res, next) => {
  getClass()
  .then(data => {
    const cond = req.isAuthenticated();
    const user = req.user;
    const mark = renderToString(
      <StaticRouter>
         <Student />
      </StaticRouter>
    )
    return res.send(
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
                   ${mark}
                </div>
              </body>
          </html>`
      )
  }).catch(next)
});

router.post('/', (req, res, done) => {
  var name = req.body.name;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var city = req.body.city;
  var teacher = req.body.teacher ? req.body.teacher : null;
  var class1 = req.body.class ? req.body.class : null;
  var school = req.body.school ? req.body.school : null;
  var subject = req.body.subject;
  var teach = req.body.teach;
  var password = req.body.password;
  var confirm = req.body.confirm;
  var scores = req.body.scores;
  var completed = req.body.completed;
  var timestamp = new Date().toDateString();

  req.checkBody('name', 'Поле должно быть заполнено').notEmpty();
  req.checkBody('lastname', 'Поле должно быть заполнено').notEmpty();
  req.checkBody('email', 'Неправильный Email').isEmail();
  req.checkBody('city', 'Поле должно быть заполнено').notEmpty();
  req.checkBody('subject', 'Поле должно быть заполнено').notEmpty();
  req.checkBody('password', 'Минимально число символов - 5').isLength({min: 5});
  req.checkBody('confirm', 'Поля должны совпадать').equals(password);

  var errors = req.validationErrors();

  if(errors) {
    console.log(teach);
    const mark = renderToString(
      <StaticRouter>
         <Student />
      </StaticRouter>
    )
    const cond = req.isAuthenticated();
    return res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>hablando</title>
                  <link rel="stylesheet" type="text/css" href="main.css">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_ERRORS__= ${serialize(errors)}</script>
                       <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                       <title>Практикуй английский</title>
                        </head>
                      <body>
                     <div id="app">
                   ${mark}
                </div>
              </body>
          </html>
      `
    )
  }

  Teach.findOne({email: email}, function(err, user) {
    if (err) {
      return done(err);
    }
    if(user) {
      const errors = [{'msg': 'Такой Email уже используется'}];
      const cond = req.isAuthenticated();
      const mark = renderToString(
        <StaticRouter>
           <Student />
        </StaticRouter>
      )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>hablando</title>
                  <link rel="stylesheet" type="text/css" href="main.css">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_ERRORS__= ${serialize(errors)}</script>
                       <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                       <title>Практикуй английский</title>
                        </head>
                      <body>
                     <div id="app">
                   ${mark}
                </div>
              </body>
          </html>
      `
    );
    return done(null, false);
  }

  var newUser = new Teach({
    name: name,
    lastname: lastname,
    email: email,
    city: city,
    teacher: teacher,
    class: class1,
    school: school,
    subject: subject,
    teach: teach,
    password: password,
    scores: scores,
    completed: completed,
    timestamp: timestamp
  });

  Teach.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(user);
  });

  const success = true;
  const indicate = 'Вы успешно зарегестрировались и теперь можете войти в личный кабинет!';
  const cond = req.isAuthenticated();
  const they = renderToString(
        <StaticRouter>
           <Student />
        </StaticRouter>
      )
      res.send(
        `<!DOCTYPE html>
              <html>
                  <head>
                     <title>Speaqiz - Регистрация</title>
                        <link rel="stylesheet" type="text/css" href="main.css">
                         <meta name="viewport" content="width=device-width, initial-scale=1">
                           <script src='bundle.js' defer></script>
                              <script>window.__INITIAL_STATE__ = ${serialize(indicate)}</script>
                               <script>window.__INITIAL_SUSSECC__ = ${serialize(success)}</script>
                                <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                                </head>
                              <body>
                             <div id="app">
                          ${they}
                    </div>
                </body>
          </html>
        `
      )
    });
  });

  function notLoggedIn(req, res, next) {
    if(!req.isAuthenticated()) {
      return next();
    }
      res.redirect('/profile');
  }

export default router;
