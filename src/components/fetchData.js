import React, { Component } from "react";
import axios from 'axios';
import passport from 'passport';


async function getClass(id) {

  return await axios.get(`http://localhost:8888/api/separate/${id}`)
  .then(res => {
    let info = res.data;
    return info;
   })
   .catch(err => console.log(err))
  }

  getClass()
  .then(info => info)
  .catch(err => console.log(err))


export { getClass };
