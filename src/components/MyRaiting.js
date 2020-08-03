import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';
import Footer from './Footer';
import gold from '../../public/images/gold-cup.svg';
import silver from  '../../public/images/silver.svg';
import bronze from '../../public/images/cup.svg';
import astro3 from '../../public/images/astronaut-3.svg';
import arrow from '../../public/images/arrow.svg';

class MyRaiting extends React.Component {

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
  }

  rait = () => {
    if(this.state.rait && this.state.user) {
      const exarr = [];

      let zero = this.state.rait.student;
      let one = zero.filter(one => one.teacher == this.state.user.teacher); // -> array of students

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

          one.splice(ind3, 1)
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
        <p className='champ_wrap'>
          <img src={gold} id='gold1' className='awords2' style={{
            display: (arr.length >= 1 ? 'block' : 'none')
          }}/>
            <img src={silver} id='silver1' className='awords2' style={{
              display: (arr.length >= 2 ? 'block' : 'none')
            }}/>
           <img src={bronze} id='bronze1' className='awords2' style={{
             display: (arr.length >= 3 ? 'block' : 'none')
           }}/>
           {arr.length > 0 ? arr.map(champ => (
             <p className='study_rait' style = {{
               backgroundColor: (champ.email === this.state.user.email ? '#2ECCFA' : '#00738E	')
             }}>
                <p>{champ.name} &nbsp; {champ.lastname}</p>
                  <p>{champ.class ? 'Группа/класс: ' + champ.class : null}</p>
                 <p>{champ.school ? 'Университет/школа: ' + champ.school : null}</p>
                <p>Баллы: {champ.scores}</p>
             </p>
           )) : 'У Вас пока нет конкурентов'}
        </p>
      )
    }
  }

  render() {

    return(
      <p>
       <NavLink to='/profile' className='wrap_arrow2'><img src={arrow} id='arrow'/>Главная</NavLink>
        <p id='your_rait'>Ваш рейтинг среди обучающихся у Вашего учителя</p>
        <i id='your_rait2'>Поднимайтесь вверх по таблице, зарабатывая баллы. Будьте уверены,что учитель отслеживает Ваши успехи и
        обязательно наградит Вас!</i>
        {this.rait()}
        <img src={astro3} id='astro3' />
        <p className='wrap_foot44'><Footer /></p>
      </p>
    )
  }
}

export default MyRaiting;
