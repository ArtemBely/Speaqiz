import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import astronaut from '../../public/images/astronaut-3.svg';
import done from '../../public/images/check.svg';

class Student extends React.Component {

  constructor() {
    super()

    let errors;
    let user;
    let cond;
    let data;
    let indicate;
    let success;
    if(__isBrowser__) {
      errors = window.__INITIAL_ERRORS__;
      indicate = window.__INITIAL_STATE__;
      success = window.__INITIAL_SUSSECC__;
      data = window.__INITIAL_DATA__;
      user = window.__INITIAL_USER__;
      cond = window.__INITIAL_COND__;
    }

    this.state = {
      errors,
      indicate,
      success,
      data,
      user,
      cond
    }
    console.log(this.state.errors);
  }

  componentDidMount() {
    if(this.state.success) {
      setTimeout(() => {
          window.location.replace('/signin');
      }, 2500);
    }
  }

  error = () => {
    if(this.state.errors) {
      return (
        <p className='wrap_err'>
            {this.state.errors.map(error => (
              <p className='each_err'>{error.msg}</p>
             ))
            }
        </p>
      )
    }
  }

check4 = () => {
  if(!this.state.cond) {
    return(
      <p>
        <p className='iam'>я студент</p>
          <p id='wrap_astro'><img src={astronaut} id='astro'/></p>
           <form className='form_student' action='registration_student' method='POST'>
             <input type='text' name='name' placeholder='Ваше имя'/>
               <input type='text' name='lastname' placeholder='Ваше фамилие'/>
                 <input type='text' name='email' placeholder='Ваш email'/>
                   <input type='text' name='city' placeholder='Город проживания'/>
                    <input type='text' name='school' placeholder='Название университета/школы(если есть)'/>
                      <input type='text' name='subject' placeholder="Язык подготовки, например 'spanish'"/>
                     <input type='text' name='teacher' placeholder='Преподаватель(если есть)'/>
                    <input  type='text' name='class' placeholder='Класс/группа(если есть)'/>
                  <input type='text' name='password' placeholder='Пароль'/>
                 <input type='text' name='confirm' placeholder='Подтвердите пароль'/>
               <input type='hidden' name='teach' value='student' />
              <input type='hidden' name='scores' value={0} />
            <input type='hidden' name='completed' value='' />
            <input type='hidden' name='timestamp' />
              <input type='hidden' name='locked' />
             <button type='submit' className='but1'>Отправить</button>
           </form>
      </p>
    )
  }
}

suc = () => {
  if(this.state.success) {
    return(
      <p className='mod_co'>
        <p className='nest_co'>
          <p id='you_suc'><p id='you_suc2'>{this.state.indicate}</p>
             <img src={done} id='suc_do' />
          </p>
        </p>
      </p>
    )
  }
}

  render() {
    return (
      <p className='wrap_all'>
         {this.check4()}
         {this.error()}
         {this.suc()}
      </p>
    )
  }
}

export default Student;
