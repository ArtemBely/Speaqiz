import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../../public/styles/style.css';
import Profile_Teacher from './Profile_Teacher';
import Profile_Student from './Profile_Student';
import Search from './Search';

class Enter extends React.Component {

constructor() {
  super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }
      if(user) {
      console.log(this.state.user.teach);
    }
  }

  check = () => {
    if(this.state.user && this.state.user.teach === 'teacher') {
      return (
          <Profile_Teacher />
      )
    }
    else {
      return (
          <Profile_Student />
      )
    }
  }

  search = () => {
    if(!this.state.user) {
      return (
          <Search />
      )
    }
  }

  render() {
    return (
      <p className='com_st_wrap'>
        {this.check()}
        {this.search()}
      </p>
    )
  }
}

export default Enter;
