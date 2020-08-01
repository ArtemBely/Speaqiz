import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Search from '../../components/Search';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { getClass } from '../../components/fetchData';
import Teach from '../models/regteacher';

const router = express.Router();

router.get('/', (req, res, next) => {
  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Search />
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
  });
});


export default router;
