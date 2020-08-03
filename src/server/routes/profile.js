import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Profile from '../../components/Profile';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';


const router = express.Router();

router.get('/', isLoggedIn,  async (req, res, next) => {
  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const prof = renderToString(
      <StaticRouter>
           <Profile />
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
                              <script>window.__INITIAL_DATA__= ${serialize(data)}</script>
                               <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                                <script>window.__INITIAL_USER__= ${serialize(user)}</script>
                               </head>
                             <body>
                           <div id="app">
                        ${prof}
                  </div>
              </body>
        </html>
      `
    )
  }).catch(next)
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
  };
    res.redirect('/');
}

router.get('/:id', async (req, res, next) => {
  let user = req.user;
  let the = user.subject;

  let control = the.findIndex(fil => fil === req.params.id);
  let del = the.splice(control, 1);

  user.subject = the;

  try {
    user = await user.save();
    console.log(the);
    res.redirect('/profile');
  }
  catch {
    err => console.log(err);
  }
})

router.post('/', async (req, res, next) => {

  let user = req.user;
  user.teacher = req.body.teacher;
  user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();

  req.checkBody('teacher', "Графа должна содержать электронный адрес преподавателя и быть формата '@mail'").isEmail();
  var errors = req.validationErrors();

   if(errors) {
     console.log(errors);
     var cond = req.isAuthenticated();
     var markup = renderToString(
       <StaticRouter>
          <Profile />
       </StaticRouter>
     )
     return res.send(
       `<!DOCTYPE html>
           <html>
               <head>
                 <title>Speaqiz - Регистрация</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link rel="shortcut icon" href="/images/astronaut-3.ico" type="image/x-icon">
                     <script src='/bundle.js' defer></script>
                       <script>window.__INITIAL_ERRORS__= ${serialize(errors)}</script>
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
   }

  else {
        user = await user.save();
        console.log(user);
        res.redirect('/profile');
     }
});

router.post('/class', async (req, res, next) => {
   let user = req.user;
   user.class = req.body.class;
   user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();

   try {
     user = await user.save();
     console.log(user);
     res.redirect('/profile');
   }
   catch {
     err => console.log(err);
   }
});

router.post('/school', async (req, res, next) => {
   let user = req.user;
   user.school = req.body.school;
   user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();

   try {
     user = await user.save();
     console.log(user);
     res.redirect('/profile');
   }
   catch {
     err => console.log(err);
   }
});

router.post('/city', async (req, res, next) => {
   let user = req.user;
   user.city = req.body.city;
   user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();

   try {
     user = await user.save();
     console.log(user);
     res.redirect('/profile');
   }
   catch {
     err => console.log(err);
   }
});

router.post('/subject', async (req, res, next) => {
   let user = req.user;
   user.timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
   user.subject.push(req.body.subject)
   try {
     user = await user.save();
     console.log(user);
     res.redirect('/profile');
   }
   catch {
     err => console.log(err);
   }
});


export default router;
