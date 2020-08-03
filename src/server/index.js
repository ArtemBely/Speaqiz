import mongoose from 'mongoose';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import session from 'express-session';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import Routes from '../components/routes';
import { getClass } from '../components/fetchData';
import App from '../components/App';
import Main from '../components/Main';
import cors from 'cors';
import passport from 'passport';
import flash from 'connect-flash';

import apiRouter from './routes/api';
import teachRouter from './routes/teach';
import studRouter from './routes/study';
import enterRouter from './routes/signin';
import addRouter from './routes/add';
import addTeRouter from './routes/addteacher';
import profRouter from './routes/profile';
import thRouter from './routes/themes';
import postRouter from './routes/poster';
import post2Router from './routes/poster2';
import classRouter from './routes/classes';
import learnRouter from './routes/learn';
import searchRouter from './routes/searchteacher';
import raitRouter from './routes/raiting';
import proRouter from './routes/professor';
import raiRouter from './routes/rait';
import myraiRouter from './routes/myrait';
import telegramRouter from './routes/telegram';
//const MongoStore = require('connect-mongo')(session);
const app = express();
const CONNECTION_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection completed');
  }
);


app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(validator());
app.use(cookieParser())
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(cors({
  methods:['GET','POST'],
  credentials: true
}))

app.use('/registration_teacher', teachRouter);
app.use('/registration_student', studRouter);
app.use('/signin', enterRouter);
app.use('/api', apiRouter);
app.use('/profile', profRouter);
app.use('/add', addRouter);
app.use('/addteacher', addTeRouter);
app.use('/newpost', postRouter);
app.use('/newpost2', post2Router);
app.use('/themes', thRouter);
app.use('/myclasses', classRouter);
app.use('/students', learnRouter);
app.use('/searchteacher', searchRouter);
app.use('/raiting', raitRouter);
app.use('/rait', raiRouter);
app.use('/myraiting', myraiRouter);
app.use('/telegram', telegramRouter);

app.get('/robots.txt', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/robots.txt'));
});
app.get('/sitemap.xml', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/sitemap.xml'));
});

app.get('/', notLoggedIn, (req, res, next) => {
  getClass()
  .then(data => {
    const cond = req.isAuthenticated();
    const user = req.user;
    console.log(new Date().toLocaleString("en-AU"));
    const mark = renderToString(
      <StaticRouter>
         <Main />
      </StaticRouter>
    )
    return res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Изучайте языки вместе со speaqiz</title>
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

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}
/*function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}
app.use(ignoreFavicon);*/

app.get('*', (req, res, next) => {
  const activeRoute = Routes.find((route) => matchPath(req.url, route)) || {};
  //console.log(activeRoute);
  const promise = activeRoute.fetchInitialData
                  ? activeRoute.fetchInitialData(req.path)
                  : Promise.resolve()

  promise
  .then(data => {
    const cond = req.isAuthenticated();
    const user = req.user;
    const context = { data };
    //console.log(data);
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
         <App data={data} />
      </StaticRouter>
    )
    const html =
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Изучайте языки вместе со speaqiz</title>
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
        </html>`;

    return res.send(html);

  }).catch(next)
});

/*
app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/

app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});

app.listen(8888, () => { console.log('Connected!'); })
