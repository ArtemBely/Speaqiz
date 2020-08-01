import React from 'react';
import '../../public/styles/style.css';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import alert from '../../public/images/exclamation.svg';

class NoMatch extends React.Component {

  render() {
    return(
      <p>
        <p className='wrap_alert'>
          <img src={alert} id='alert2'/>
          <p className='oops'>Упсс.. Что-то пошло не так, мы не смогли найти запрашиваемую Вами страницу.
          Пожалуйста, проверьте url-адрес или начните с &nbsp;
          <a href='/profile' className='main_page'>главной страницы</a></p>
          </p>
        <p className='wrap_foot8'><Footer /></p>
      </p>
    )
  }
}

export default NoMatch;
