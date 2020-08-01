import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import arrow from '../../public/images/arrow.svg';

class MyClasses extends React.Component {

  constructor() {
    super()

    let teacher;
    let user;
    if(__isBrowser__) {
      teacher = window.__INITIAL_DATA__;
      user = window.__INITIAL_USER__;
    }

    this.state = {
      teacher,
      user
    }
  }

  detect = () => {
    if(this.state.teacher && this.state.user) {
      let one = this.state.teacher.user.filter(mail => mail.email === this.state.user.teacher);
      let one1 = one[0];
      return (
        <p className='super_wrap'>
          <p className='teach_inf'>Учитель: &nbsp; {one1 ? one1.name : 'У Вас пока нет учителя'} &nbsp;&nbsp; {one1 ? one1.lastname : null}</p>
          <p className='teach_inf'>Мой класс/группа: &nbsp; {this.state.user.class ? this.state.user.class : 'у вас пока нет класса'}</p>
          <p className='common_themes' style={{
            display:(one1 ? 'grid' : 'none')
          }}>
          <p className='tit'>Темы учителя</p>{one1 ? one1.themes.map(teach => (
            <NavLink to={'/students/' + teach.themes} className='each_tit'>{teach.themes}</NavLink>
          )) : null}</p>
        </p>
      )
    }
  }

  render() {
    return (
      <p className='main'>
       <NavLink to='/profile' className='com_main'><img src={arrow} id='arrow'/>Главная</NavLink>
          {this.detect()}
      </p>
    )
  }
}

export default MyClasses;
