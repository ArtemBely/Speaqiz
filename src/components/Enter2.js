import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';

class Enter extends React.Component {

  constructor() {
    super()

    let error;
    let errors;

    if(__isBrowser__) {
      error = window.__INITIAL_MESSAGE__;
      errors = window.__INITIAL_MESSAGE2__;
    }

    this.state = {
      error,
      errors
    }
  }

  condy = () => {
    if(this.state.error) {
      return(
        <p>
          {this.state.error}
        </p>
      )
    }
  }
  condy2 = () => {
    if(this.state.errors) {
      return(
        <p>
          {this.state.errors}
        </p>
      )
    }
  }

  render() {
    return (
      <p>
         <p>Войти</p>
               <form className='form_student' action='/signin2' method='POST'>
                   <input type='text' name='email' placeholder='Ваш email' required/>
                  <input type='password' name='password' placeholder='Пароль' required/>
                <button type='submit'>Принять</button>
           </form>
          {this.condy()}
        {this.condy2()}
      </p>
    )
  }
}

export default Enter;
