import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../../public/styles/style.css';
import astronaut from '../../public/images/translation.svg';
import connect from '../../public/images/broken-link.svg';
import search from '../../public/images/search.svg';
import aeroplane from '../../public/images/aeroplane.svg';
import qa from '../../public/images/qa.svg';
import increase from '../../public/images/increase.svg';
import architecture from '../../public/images/architecture.svg';
import user from '../../public/images/user — копия.svg';
import people from '../../public/images/people.svg';
import done from '../../public/images/done — копия.svg';
import phone from '../../public/images/phone — копия.svg';
import Footer from './Footer';

class Main extends React.Component {

  constructor() {
    super()

    let user;
    let data;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      data = window.__INITIAL_DATA__;
    }

    this.state = {
      user,
      data
    }

    this.blue = React.createRef();
    this.one = React.createRef();
    this.two = React.createRef();
    this.three = React.createRef();
    this.four = React.createRef();
    this.haki = React.createRef();
    this.five = React.createRef();
    this.six = React.createRef();
    this.seven = React.createRef();
    this.eight = React.createRef();
    this.nine = React.createRef();
    this.ten = React.createRef();
    this.fin = React.createRef();
  }

  super = () => {
    if(this.state.data) {
      const namer = {
        name: 'Johnson',
        greed: function() {
          return(5 * 10);
        }
      }
      return(
        <p className='main'>

            <p className='navbar'>
                <NavLink to='/registration_teacher' className='teacher com_tea'>Я преподаватель</NavLink>
                  <NavLink to='/registration_student' className='student com_tea'>Я ученик/студент</NavLink>
                <a href='/signin' className='sign'><p className='signin2'>Уменя уже есть аккаунт</p>Войти</a>
            </p>

            <p className='wrap_mainf'>
                <p className='mainf_nested'>
                   <p className='wrap_first'>
                      <b id='bi2'>Начните изучение языков шаг за шагом.</b>
                        <p id='best2'>Лучшие преподаватели рядом с Вами</p>
                        <NavLink to='/searchteacher' className='find_te'>Найти преподавателя</NavLink>
                      </p>
                   <p className='ast'><img src={astronaut} id='astro2'/></p>
               </p>
            </p>
        </p>
      )
    }
  }

  go = () => {
    window.addEventListener('scroll', () => {
      if(this.blue.current) {
          let neo = this.blue.current;
          let one = this.one.current;
          let two = this.two.current;
          let three = this.three.current;
          let four = this.four.current;
          if(window.innerHeight - neo.getBoundingClientRect().top > 500) {
            one.classList.add('opa1');
          }
          else {
            one.classList.remove('opa1');
          }
          if(window.innerHeight - neo.getBoundingClientRect().top > 550) {
            two.classList.add('opa1');
          }
          else {
            two.classList.remove('opa1');
          }
          if(window.innerHeight - neo.getBoundingClientRect().top > 650) {
            three.classList.add('opa1');
          }
          else {
            three.classList.remove('opa1');
          }
          if(window.innerHeight - neo.getBoundingClientRect().top > 670) {
            four.classList.add('opa1');
          }
          else {
            four.classList.remove('opa1');
          }
       }
    });
  }

  super2 = () => {
    if(this.state.data) {
      return(
        <p id='blue_cont' ref={this.blue}>
         {this.go()}
           <p id='opp'>Возможности для изучения языков еще не были такими большими</p>
           <p className='wr_st'>
              <p id='for_students2'>Для студентов:</p>
              <p className='content_im' ref={this.one}><img src={architecture} className='pictures3' /> Находите лучших преподавателей в удобном для Вас городе, используя форму поиска!</p>
              <p className='content_im' ref={this.two} id='lets_group'><img src={connect} className='pictures3' /> Преисоединяйтесь в группу к педагогу, используя его email у себя в личном кабинете</p>
              <p className='content_im' ref={this.three}><img src={qa} className='pictures3' /> Выполняйте задания, зарабатывая рейтинг среди одногруппников</p>
              <p className='content_im' ref={this.four} id='lets_group2'><img src={increase} className='pictures3' /> Оценивайте Вашего преподавателя для лучшей взаимной работы!</p>
           </p>
        </p>
      )
    }
  }

  go2 = () => {

    window.addEventListener('scroll', () => {
      if(this.haki.current) {
          let haki = this.haki.current;
          let five = this.five.current;
          let six = this.six.current;
          let seven = this.seven.current;
          let eight = this.eight.current;
          let nine = this.nine.current;
          let ten = this.ten.current;
          if(window.innerHeight - haki.getBoundingClientRect().top > 400) {
            five.classList.add('opa1');
          }
          else {
            five.classList.remove('opa1');
          }
          if(window.innerHeight - haki.getBoundingClientRect().top > 450) {
            six.classList.add('opa1');
          }
          else {
            six.classList.remove('opa1');
          }
          if(window.innerHeight - haki.getBoundingClientRect().top > 550) {
            seven.classList.add('opa1');
          }
          else {
            seven.classList.remove('opa1');
          }
          if(window.innerHeight - haki.getBoundingClientRect().top > 570) {
            eight.classList.add('opa1');
          }
          else {
            eight.classList.remove('opa1');
          }
          if(window.innerHeight - haki.getBoundingClientRect().top > 670) {
            nine.classList.add('opa1');
          }
          else {
            nine.classList.remove('opa1');
          }
          if(window.innerHeight - haki.getBoundingClientRect().top > 690) {
            ten.classList.add('opa1');
          }
          else {
            ten.classList.remove('opa1');
          }
       }
    });
  }

  super4 = () => {
    if(this.state.data) {
      return(
        <p className='third_cont' ref={this.haki}>
         {this.go2()}
          <p className='sup_wr2'>
             <p id='for_tea'>Для преподавателей:</p>
             <p className='each_im_one' ref={this.five}><img src ={user} className='pictures3'/> Создайте личный кабинет, указав свой стаж работы, предметы преподавания и личную информацию для Ваших учеников</p>
             <p className='each_im_one' ref={this.six}><img src ={user} className='pictures3'/> Поделитесь со своими учениками Вашим email адресом, чтобы они легко смогли присоединиться к Вам в группу</p>
             <p className='each_im_one' ref={this.seven}><img src ={done} className='pictures3'/> Выкладывайте задания и теоретические материалы в удобном порядке</p>
             <p className='each_im_one' ref={this.eight}><img src ={people} className='pictures3'/> Теперь Ваши ученики могут выполнять задания и зарабатывать рейтинг</p>
             <p className='each_im_one' ref={this.nine}><img src ={increase} className='pictures3'/> Зарабатывайте рейтинг среди Ваших учеников, чтобы его смогли видеть все желающие изучать предмет</p>
             <p className='each_im_one' ref={this.ten}><img src ={phone} className='pictures3'/> Отлично! Теперь с Вами легко могут связаться будущие студенты</p>
          </p>
        </p>
      )
    }
  }

  go3 = () => {
    window.addEventListener('scroll', () => {
      if(this.fin.current) {
          let fin = this.fin.current;
          if(window.innerHeight - fin.getBoundingClientRect().top > 200) {
            fin.classList.add('opa1');
          }
          else {
            fin.classList.remove('opa1');
          }
       }
    });
  }

  super3 = () => {
    if(this.state.data) {
      return(
        <p className='find_future'>
           {this.go3()}
           <p id='fin_te' ref={this.fin}>Найдите будущего учетеля в два клика <a href='/searchteacher' className='sea'><img src={search} id='sear'/></a></p>
        </p>
      )
    }
  }

  foot = () => {
    if(this.state.data) {
      return (
        <p className='wrap_foot9'><Footer /></p>
      )
    }
  }

  render() {
    return (
      <p style={{
        backgroundColor: '#fff'
      }}>
        {this.super()}
        {this.super2()}
        {this.super3()}
        {this.super4()}
        {this.foot()}
      </p>
    )
  }
}

export default Main;
