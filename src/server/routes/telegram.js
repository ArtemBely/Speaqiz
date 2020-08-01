import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Profile from '../../components/Profile';
import Search from '../../components/Search';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';

const router = express.Router();
const http = require('request');
const chatId = '-410471930';
const token = '1305995012:AAHsyPkUswsYaha4fT3lhmtFh0tjPDM3-tk';

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

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
                <title>Speaqiz - лучший помощник в изучении языка</title>
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

router.post('/', async (req, res, next) => {
  let reqBody = req.body;
  let fields = [
    '<b>Name</b>: ' + reqBody.name,
    '<b>Phone</b>: ' + reqBody.phone,
    '<b>Message</b>: ' + reqBody.telegram
  ];

  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });

  msg = encodeURI(msg);
  console.log(msg);

  http.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`,
      async function (error, response, body) {
        getClass()
        .then(data => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if(response.statusCode == 200) {
            let suc = 'Ваше пожелание успешно отправлено!';
            const indicate = 'mobile';
            const cond = req.isAuthenticated();
            const user = req.user;
            const mark = renderToString(
              <StaticRouter>
                 <Profile />
              </StaticRouter>
            )
            return res.send(
              `<!DOCTYPE html>
                  <html>
                      <head>
                        <title>Speaqiz - лучший помощник в изучении языка</title>
                          <link rel="stylesheet" type="text/css" href="main.css">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                             <script src='bundle.js' defer></script>
                             <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                              <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
                               <script>window.__INITIAL_COND__ = ${serialize(cond)}</script>
                                <script>window.__INITIAL_SUC__ = ${serialize(suc)}</script>
                                <script>window.__INITIAL_INDICATE__ = ${serialize(indicate)}</script>
                                </head>
                              <body>
                             <div id="app">
                           ${mark}
                        </div>
                      </body>
                </html>`
            );
        }

        if(response.statusCode !== 200){
            const suc = 'Произошла ошибка, пожалуйста, попробуйте отправить еще раз';
            const mistake = true;
            const cond = req.isAuthenticated();
            const user = req.user;
            const indicate = 'mobile';
            const mark = renderToString(
              <StaticRouter>
                 <Profile />
              </StaticRouter>
            )
              return res.send(
                `<!DOCTYPE html>
                    <html>
                        <head>
                          <title>Speaqiz - лучший помощник в изучении языка</title>
                            <link rel="stylesheet" type="text/css" href="main.css">
                              <meta name="viewport" content="width=device-width, initial-scale=1">
                               <script src='bundle.js' defer></script>
                               <script>window.__INITIAL_SUC__ = ${serialize(suc)}</script>
                                <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                                 <script>window.__INITIAL_MIS__ = ${serialize(mistake)}</script>
                                 <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
                                  <script>window.__INITIAL_COND__ = ${serialize(cond)}</script>
                                  <script>window.__INITIAL_INDICATE__ = ${serialize(indicate)}</script>
                                  </head>
                                <body>
                               <div id="app">
                             ${mark}
                          </div>
                        </body>
                  </html>`
              );
          }
        }).catch(next)
      }
    )
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
