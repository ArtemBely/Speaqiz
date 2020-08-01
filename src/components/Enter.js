import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import cloud from '../../public/images/cloud — копия.svg';

class Enter extends React.Component {

  constructor() {
    super()

    let error;
    let user;
    let cond;
    let data;
    if(__isBrowser__) {
      error = window.__INITIAL_MESSAGE__;
      user = window.__INITIAL_USER__;
      cond = window.__INITIAL_COND__;
      data = window.__INITIAL_DATA__;
    }

    this.state = {
      error,
      user,
      cond,
      data
    }
  }

  condy2 = () => {
    if(this.state.error && this.state.error.length === 1) {
      return(
        <p className='enter_error'>
          {this.state.error}
        </p>
      )
    }
  }

  sign = () => {
    if(this.state.data) {
      return(
          <p>
          <p className='enter1'>Войти</p>
              <form className='form_student1' action='/signin' method='POST'>
                    <input type='text' name='email' placeholder='Ваш email' required/>
                       <input type='password' name='password' placeholder='Пароль' required/>
                      <button type='submit' id='but2'>Принять</button>
                    </form>
                  {this.condy2()}
               <p><p className='th'>think <i className='be'>before</i></p><img src={cloud} id='cloud'/></p>
            <p id='protect'>data is protected by bcrypt 2020</p>
        </p>
      )
    }
  }

  render() {
    return (
      <p className='wrap_sign'>
        {this.sign()}
      </p>
    )
  }
}

export default Enter;
