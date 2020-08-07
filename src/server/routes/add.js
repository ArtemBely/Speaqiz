import React from 'react';
import express from 'express';
import Class from '../models/class.js';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res, next) => {
    if(!req.isAuthenticated()) {
      return res.redirect('/profile');
    }
    else {
      return next();
    }
});

router.post('/', async (req, res, next) => {

  let user = req.user;

  var name = user.name;
  var lastname = user.lastname;
  var email = user.email;
  var teacher = user.teacher;
  var school = user.school;
  var subject = user.subject;
  var password = user.password;
  var teach = user.teach;


  let cla = new Class({
    padavans: req.body.padavans
  });

  user.padavans.push(cla);
  let check = user.themes.filter(use => typeof use === 'object');
  user.themes = check;
  console.log(check);
  
    try {
      user = await user.save();
      console.log(user);
      res.redirect('/profile');
    }
    catch(err) {
      console.log(err);
    }

});


export default router;
