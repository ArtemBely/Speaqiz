import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import AddTeacher from './AddTeacher';
import Search from './Search';
import MyClasses from './MyClasses';
import Footer from './Footer';
import Mobile from './Mobile_menu';
import Raiting from './Raiting';
import { Spring } from 'react-spring/renderprops.cjs';
import person from '../../public/images/person.svg';
import done from '../../public/images/check.svg';
import close from '../../public/images/close.svg';

class Enter extends React.Component {

constructor() {
  super()

    let user;
    let success;
    let data;
    let errors;
    let mistake;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      data = window.__INITIAL_DATA__;
      errors = window.__INITIAL_ERRORS__;
      success = window.__INITIAL_SUC__;
      mistake = window.__INITIAL_MIS__;
    }

    this.state = {
      user,
      data,
      errors,
      success,
      mistake
    }
      if(errors) {
      console.log(this.state.errors[0].msg);
    }
  }

  success = () => {
    if(this.state.success) {
      return(
        <Spring
        from={{opacity: 1, zIndex: 1}}
        to={{opacity: 0, zIndex: -1}}
        config={{duration: 1000, delay: 2000}}
        >
        {props =>
          <p className='wrap_tele' style={props}>
           <p className='nest_modal'>
            <img src={!this.state.mistake ? done : close} id='telecheck' />
            <p id='textDone'>{this.state.success}</p>
           </p>
          </p>
        }
        </Spring>
      )
    }
  }

  dataStudent = () => {
    if(this.state.user) {
      return(
        <p className='wrap_study'>
          <p className='wrap_study_data'>Имя: &nbsp;&nbsp; {this.state.user.name}</p>
            <p className='wrap_study_data'>Фамилия: &nbsp;&nbsp; {this.state.user.lastname}</p>
              <p className='wrap_study_data'>Email: &nbsp;&nbsp; {this.state.user.email}</p>
            <p className='wrap_study_data'>Город: &nbsp;&nbsp; {this.state.user.city}</p>
          <p className='wrap_study_data'>Предметы изучения: &nbsp;&nbsp; {this.state.user.subject.map(subject => (
            <p id='lang'>{subject}<a href={'/profile/' + subject} className='del_link'><p className='del1'>delete</p></a></p>
          ))}</p>
        <Route path={['/profile', '/addteacher', '/telegram', '/add']}><p className='wrap_study_data'>Преподаватель: &nbsp;&nbsp; {this.state.user.teacher}
           <NavLink to='/raiting' className='feed_get'>Оставить отзыв</NavLink>
        </p>
          </Route>
           <Route exact path ='/raiting' component={Raiting} />
              <p className='wrap_study_data'>Класс/группа: &nbsp;&nbsp; {this.state.user.class}</p>
      <p className='wrap_study_data'>Школа/Университет: &nbsp;&nbsp; {this.state.user.school}</p>
        </p>
      )
    }
  }


check = () => {
  if(this.state.user) {
    return (
      <p className='student_profile'>
        <p id='pi'><img src={person} id='pers'/></p>
         <Route path={['/profile', '/raiting', '/telegram']}>
           <a href='/profile/logout' className='add3' id='logout3'><p>Выйти</p></a>
           <NavLink to='/addteacher' className='add3' id='add4'><p>Добавить учителя/группу</p></NavLink>
          </Route>
        <Route exact path='/addteacher' component={AddTeacher} />
      </p>
    )
  }
}

error = () => {
  if(this.state.errors) {
      return (
      <p className='err'>{this.state.errors[0].msg}</p>
    )
  }
}

foo = () => {
  if(this.state.user) {
    return(
        <p>

           <p className='wrap_fu' style={{
             top: (window.location.pathname === '/raiting' && window.screen.width < 1000 ? -375 : null)
           }}>
              <NavLink to='/searchteacher' className='com_wr raiting'>Найти учителя</NavLink>
              <NavLink to='/myclasses' className='com_wr my_class'>Мои классы</NavLink>
              <NavLink to='/myraiting' className='com_wr my_class'>Мои рейтинг</NavLink>
            </p>
           <p className='wrap_foot3'><Footer /></p>
        </p>
     )
  }
}

  render() {
    return (
      <p>
        <Mobile />
         {this.success()}
          {this.error()}
            {this.check()}
            {this.dataStudent()}
          {this.foo()}
      </p>
    )
  }
}

export default Enter;
