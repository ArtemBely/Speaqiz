import React from 'react';
import '../../public/styles/style.css';
import insta from '../../public/images/instagram.svg';
import fb from '../../public/images/facebook.svg';
import vk from '../../public/images/vk.svg';
import gm from '../../public/images/email.svg';
import call from '../../public/images/phone.svg';

class Footer extends React.Component{
  render() {
    return(
      <p className='footer'>
          <p className='contacts'>
             <p id='cont'>Контакты</p>
                <img src={call} className='com_im' id='tele_im'/>
                  <p id='telephone1'>+7 (986) 902 92 85</p>
                   <img src={gm} className='com_im' id='gmail_im'/>
                   <p id='gmail'>belysevartem9@gmail.com</p>
                   <a href='https://www.facebook.com/profile.php?id=100029927589976'><img src={fb} className='com_im' id='fb'/></a>
                  <a href ='https://www.instagram.com/xan_bely/?hl=ru'><img src={insta} className='com_im' id='inst'/></a>
               <a href='https://vk.com/xan_bely'><img src={vk} className='com_im' id='vk'/></a>
            <a href='https://mail.google.com/mail/u/0/#inbox'><img src={gm} className='com_im' id='gm'/></a>
          </p>
          <p className='tele'>
          <p id='sendus'>Напишите нам</p>
             <form action='/telegram' method='POST' id='telegram'>
                <input type='text' name='name' placeholder='Ваше имя'/>
                  <input type='text' name='phone' id='sec_inp' placeholder='Ваш контактный номер или почта'/>
                  <textarea name='telegram' id='text_area' placeholder='Сообщение'></textarea>
                <button type='submit' id='but7'>Отправить</button>
             </form>
          </p>
          <p id='line'>
              <p id='info_com'>Speaqiz.com Все права защищены 2020</p>
          </p>
      </p>
    )
  }
}

export default Footer;
