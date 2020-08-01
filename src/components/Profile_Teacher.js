import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import Add from './Add';
import Themes from './Themes';
import Part1 from './Part1';
import Class from './Class';
import Header from './Header';
import AddPhoto from './AddPhoto';
import Footer from './Footer';
import Mobile from './Mobile_menu';
import AddBio from './AddBio';
import person from '../../public/images/person.svg';
import done from '../../public/images/check.svg';
import close from '../../public/images/close.svg';

class Enter extends React.Component {

constructor() {
  super()

    let user;
    let success;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      success = window.__INITIAL_SUC__;
    }

    this.state = {
      user,
      success
    }
      if(user) {
      console.log(this.state.user.themes);
    }
  }

  success = () => {
    if(this.state.success) {
      return(
        <Spring
        from={{opacity: 1, zIndex: 1000}}
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

appear = () => {
  if(this.state.user) {
    return (
      <p className='classes'>
         {this.state.user.padavans.map((padavans) => (
           <a href={'/separate/' + padavans._id} id='pad1'><p className='com_classes'>{padavans.padavans}</p></a>
         ))}
      </p>
    )
  }
}

thema = () => {
  if(this.state.user) {
    return(
      <p className='wrap_themes'>
       {this.state.user.themes.map(use => (

             <NavLink to={'/themes/' + use.themes} className='themes5'>
             <p className='wrap_themes2'>{use.themes}</p>
             </NavLink>

       ))}
      </p>
    )
  }
}

  render() {
    return (
      <p className='wrap_teach2'>
      <Mobile />
       {this.success()}
        <p className='teach'>
            <p className='common'>
            <img src={this.state.user && this.state.user.profilePhoto ? this.state.user.profilePhoto : person}
            className='prof_image' />
            <Route exact path='/addphoto' component={AddPhoto} />
            </p>

               <NavLink to='/addphoto' className='addphoto' id='cha2' style={{
                 opacity: (window.location.pathname == '/profile' || window.location.pathname == '/telegram' ? 1 : 0),
                 zIndex: (window.location.pathname == '/profile' || window.location.pathname == '/telegram' ? 1 : -1)
                 }}>
                 {this.state.user && this.state.user.profilePhoto ? 'Изменить фото' : 'Добавить фото'}
               </NavLink>


            <NavLink to='/addbio' className='common2'>
                Добавить информацию о себе
            </NavLink>
            <Route exact path='/addbio' component={AddBio} />

            <a href='/profile/logout' id='logout'>Выйти</a>
            <p className='info_about'>
                <p className='marg'>Имя: {this.state.user.name}</p>
                  <p className='marg'>Фамилия: {this.state.user.lastname}</p>
                    <p className='marg'>Город: {this.state.user.city}</p>
                   <p className='marg conn'>{this.state.user ? 'Связаться со мной: ' + this.state.user.telephone : null}</p>
                <p id='bio2' style={{
                  opacity: (window.location.pathname === '/addbio' ? 0 : 1)
                }}>Bio: {this.state.user ? this.state.user.bio : null}</p>
            </p>
        </p>

            <p className='add'>
              <p className='add1' id='add1'>
                <NavLink to='/add' id='add_cl'>Добавить класс / Ученика</NavLink>
                <Route exact path='/add' component={Add} />
                <Route path={['/profile', '/telegram', '/addphoto', '/addbio', '/themes']}>
                   <i className='separate2'>*Здесь Выможете добавить свой класс, группу или ученика. После добавления Вы сможете видеть статистику всего класса, группы или ученика на отдельной странице
                   Просто введите название класса в поле ввода и все зарегестрированные ученики попадут к Вам к класс</i>
                </Route>
              </p>
              <p className='add1' id='my'>Мои классы / ученики
                {this.appear()}
              </p>
              <a href='/rait' className='add1' id='awards'>Рейтинг</a>
              <i className='separate2 sep'>*Здесь собран общий рейтинг Ваших учеников, а так же Ваш рейтинг среди них, который виден всем желающим изучать язык</i>
              <p className='add1' id='thema2' style={{
                border: (window.location.pathname === '/themes' ? 'none' : null)
              }}><b style={{
                opacity: (window.location.pathname === '/themes' ? 0 : 1)
              }}>Темы</b>
                <Route exact path={['/profile', '/add']}>
                <NavLink to='/themes' className='new_thema'>Добавить новую тему</NavLink>
                </Route>
                <Route exact path='/themes' component={Themes} />
                {this.thema()}
              </p>
            </p>
            <p className='wrap_for_mobile'><Footer /></p>
      </p>
    )
  }
}

export default Enter;
