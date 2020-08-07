import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';
import gold from '../../public/images/gold-cup.svg';
import silver from '../../public/images/silver.svg';
import bronze from '../../public/images/cup.svg';
import star from '../../public/images/star.svg';
import review from '../../public/images/review.svg';
import arrow from '../../public/images/arrow.svg';
import FeedBack from './FeedBack';
import Mobile from './Mobile_menu';

class Rait extends React.Component {

  constructor() {
     super()

     let user;
     let rait;

     if(__isBrowser__) {
       user = window.__INITIAL_USER__;
       rait = window.__INITIAL_DATA__;
     }

     this.state = {
       user,
       rait
     }

     this.feed = React.createRef();
  }

  rait = () => {
    if(this.state.rait && this.state.user) {
      let exarr = [];

      let zero = this.state.rait.student;
      let one = zero.filter(one => one.teacher == this.state.user.email); // -> array of students
      let comp = one.map(one => one.scores);
      let check = comp.filter(check => check != undefined); // -> array of scores

      let max1 = Math.max.apply(Math, check);
      let ind = check.indexOf(max1);
      let champ1 = one[ind]; // -> 1st place

      one.splice(ind, 1);
      check.splice(ind, 1);
      let max2 = Math.max.apply(Math, check);
      let ind2 = check.indexOf(max2);
      let champ2 = one[ind2];

      one.splice(ind2, 1);
      check.splice(ind2, 1);
      let max3 = Math.max.apply(Math, check);
      let ind3 = check.indexOf(max3);
      let champ3 = one[ind3];

      one.splice(ind3, 1);
      check.splice(ind3, 1);
      let max4 = Math.max.apply(Math, check);
      let ind4 = check.indexOf(max4);
      let champ4 = one[ind4];

      one.splice(ind4, 1);
      check.splice(ind4, 1);
      let max5 = Math.max.apply(Math, check);
      let ind5 = check.indexOf(max5);
      let champ5 = one[ind5];

      exarr.push(champ1, champ2, champ3, champ4, champ5);
      let arr = exarr.filter(ar => ar != undefined);
      console.log(arr);

      return(
        <p className='wrap_champ'>
          <p className='wrap_nav2'><NavLink to='/profile' className='nav_to'><img src={arrow} id='arrow'/>Главная</NavLink></p>
        <p id='place1'></p>
         <img src ={gold} className='awards2' id='gold' style={{
           display: (arr.length >= 1 ? 'block' : 'none')
         }}/>
         <img src ={silver} className='awards2' id='silver' style={{
           display: (arr.length >= 2 ? 'block' : 'none')
         }}/>
         <img src ={bronze} className='awards2' id='bronze' style={{
           display: (arr.length >= 3 ? 'block' : 'none')
         }}/>
           {arr.length > 0 ? arr.map((champ, index) => (
             <p className='each_champ'>
              <p id='ind'>{index + 1}</p>
                <p>Имя: {champ.name}</p>
                  <p className='lastn'>Фамилие: {champ.lastname}</p>
                    <p className='lastn'>{champ.class ? 'Класс/группа:' + champ.class : null}</p>
                  <p className='lastn'>Баллы: {champ.scores}</p>
                <p className='lastn uch'>Учебное заведение: {champ.school}</p>
             </p>
           )) : 'Ваши ученики пока не выполняли задания'}
        </p>
      )
    }
  }

  info = () => {
    if(this.state.user) {
      return(
         <p className='rait_profile'>
               <p className='wrap_data2'> {this.state.user.name}</p>
                <p className='wrap_data2'>{this.state.user.lastname}</p>
              <p className='wrap_data2'>{this.state.user.subject.map(sub => (
            <p>{sub}</p>
          ))}</p>
         <p className='wrap_data2'>{this.state.user.city}</p>
         <p id='feedback2' ref={this.feed} className='wrap_data2'>{this.state.user.raiting.length > 1 ? 'Мой рейтинг: ' + (this.state.user.raiting.filter(rait => rait.length > 0).map(function(elem){
         return /^\d+$/.test(elem) ? parseInt(elem) : 0;
       }).reduce((a, b) => a + b, 0) / (this.state.user.raiting.length - 1)).toFixed(1) + ' из 5' : 'Отзывов пока нет'}<img src={star} className='star2' style={{
         opacity:(this.state.user.raiting.length > 1 ? 1 : 0)
       }}/></p>
        </p>
      )
    }
  }

  render() {

    return(
      <p className='com_wrap_champ'>
        <Mobile />
         <p className='padavans_rait'>Рейтинг моих учеников / студентов</p>
          {this.rait()}
          <p className='wrap_myraiting'>
            <p className='myraiting'>Мой рейтинг</p>
             {this.info()}
             <NavLink to='/feedback' id='review_all'><img src={review} id='review' style={{
               opacity: (this.state.rait && this.state.user ? 1 : 0)
             }} /><p id='look'>Посмотреть отзывы</p></NavLink>
             <Route exact path='/feedback' component={FeedBack} />
             <Route exact path='/rait'>
             <p className='description'>
               *Данная статистка основана на отзывах Ваших учеников, которых Вы учите или когда-либо учили
               и носит информативный характер, а также видна всем лицам, подключенным к платформе и желающим изучать
               иностранный язык.
             </p>
             <p className='description_student'>
               *Статистика Ваших лучших студентов по всем заданиям, Вы можете использовать ее при награждении и
               всевозможном поощрении Ваших учеников.
             </p>
             </Route>
         </p>
      </p>
    )
  }
}

export default Rait;
