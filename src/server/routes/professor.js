import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { getClass } from '../../components/fetchData';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Professor from '../../components/Professor';
import passport from 'passport';

const router = express.Router();

router.get('/:id', async (req, res, next) => {

  getClass()
  .then(data => {
    const user = req.user;
    const cond = req.isAuthenticated();
    const markup = renderToString(
      <StaticRouter>
         <Professor />
      </StaticRouter>
    );
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>hablando</title>
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

export default router;
