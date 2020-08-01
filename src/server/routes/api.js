import React from 'react';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';
import Class from '../models/class';
import Teach from '../models/regteacher';
import passport from 'passport';

const router = express.Router();


router.get('/separate/:id', async (req, res) => {
    let user = await Teach.find({teach: "teacher"});
    let pad = user.map(use => use.padavans);
    var merged = [].concat.apply([], pad);

    let student = await Teach.find({teach: "student"});

    res.json({merged, student, user});
    //console.log(merged);
    return;
});


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
  };
    res.redirect('/');
}

export default router;
