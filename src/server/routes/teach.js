import React from 'react';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Student from '../../components/Student';
import Teacher from '../../components/Teacher';
import Teach from '../models/regteacher.js';
import { getClass } from '../../components/fetchData';

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  Teach.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/', notLoggedIn, (req, res, next) => {
  getClass()
  .then(data => {
    const cond = req.isAuthenticated();
    const user = req.user;
    const mark = renderToString(
      <StaticRouter>
         <Teacher />
      </StaticRouter>
    )
    return res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Speaqiz - Регистрация</title>
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
    var profilePhoto = req.body.photo;
    var name = req.body.name;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var city = req.body.city;
    var telephone = req.body.telephone;
    var class1 = req.body.class ? req.body.class : null;
    var school = req.body.school ? req.body.school : null;
    var subject = req.body.subject;
    var teach = req.body.teach;
    var password = req.body.password;
    var confirm = req.body.confirm;
    var padavans = req.body.padavans;
    var themes = req.body.themes;
    var feedback = req.body.feedback;
    var raiting = req.body.raiting;
    var bio = req.body.bio;

    req.checkBody('name', "Поле 'имя' должно быть заполнено").notEmpty();
    req.checkBody('lastname', "Поле 'фамилия' должно быть заполнено").notEmpty();
    req.checkBody('email', 'Неправильный Email').isEmail();
    req.checkBody('city', "Поле 'город' должно быть заполнено").notEmpty();
    req.checkBody('telephone', 'Неверный телефонный номер').isLength({min: 11})
    req.checkBody('subject', 'Поле должно быть заполнено').notEmpty();
    req.checkBody('password', 'Минимально число символов - 5').isLength({min: 5});
    req.checkBody('confirm', 'Поля должны совпадать').equals(password);

    var errors = req.validationErrors();

    if(errors) {
      console.log(teach);
      const cond = req.isAuthenticated();
      const mark = renderToString(
        <StaticRouter>
           <Teacher />
        </StaticRouter>
      )
    return res.send(
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>Speaqiz - Регистрация</title>
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
             <Teacher />
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
      profilePhoto: profilePhoto,
      name: name,
      lastname: lastname,
      email: email,
      city: city,
      telephone: telephone,
      class: class1,
      school: school,
      subject: subject,
      teach: teach,
      padavans: padavans,
      themes: themes,
      feedback: feedback,
      raiting: raiting,
      bio: bio,
      password: password
    });

    Teach.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log(user);
    });

    const success = true;
    const cond = req.isAuthenticated();
    const indicate = 'Вы успешно зарегестрировались и теперь можете войти в личный кабинет!';
    const they = renderToString(
          <StaticRouter>
             <Teacher />
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

    //*Enter to account*//

    passport.use('local.signin', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    },
    function(req, email, password, done) {
    Teach.findOne({email: email}, async function(err, user) {
    if(err) {
      console.log(err);
      return done(err);
    }

        if(!user) {
          req.flash('errors', 'Не найдено пользователей, возможно вы еще не зарегистрировались');
          return done(null, false);
        }

        Teach.comparePassword(password, user.password, function(err, isMatch) {
            if (err) throw err;
            if(isMatch) {
              return done(null, user);
            }
            else {
              req.flash('errors', 'Неверный пароль');
              return done(null, false)
            }
           })

        });
    }));

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
