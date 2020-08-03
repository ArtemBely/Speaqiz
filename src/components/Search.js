import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import profile from  '../../public/images/profile.svg';
import Footer from './Footer';
import Mobile from './Mobile_menu';

class Search extends React.Component {

  constructor() {

    super()

    let user;
    let data;
    let grey;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      data = window.__INITIAL_DATA__;
    }

    this.state = {
      user,
      data,
      grey: []
    }

    if(this.state.data) {
      console.log(this.state.data.user);
    }

    this.one = React.createRef();
    this.two = React.createRef();
    this.detect = React.createRef();
    this.re = React.createRef();
    this.cha = React.createRef();
  }

  fin = (event) => {
    this.one.current.value.length > 0 ? event.preventDefault() : null;
    if(this.state.data) {
      this.setState({ grey: [] });
      let start = this.state.data.user.map(start => start.subject);
      let hey2 = this.state.data.user.filter(sta2 => sta2.city.toLowerCase() === this.two.current.value.toLowerCase());
      let i;
      for(i=0; i < start.length; i++) {
        let arr = start[i].filter(re => re.toLowerCase() === this.one.current.value.toLowerCase());
        if(arr.length === 1) {
        let supe = this.state.data.user[i];
        hey2.push(this.state.data.user[i]);
        this.setState({ grey: hey2 });
       }
      }
    }
    setTimeout(() => {
      if(this.state.grey.length === 0) {
        this.re.current.style.opacity = 0;
        this.cha.current.style.opacity = 1;
        console.log(this.state.grey.length);
      }
      else {
        this.cha.current.style.opacity = 0;
        console.log(this.state.grey.length);
      }
    }, 100);
  }

  newer = () => {
    if(this.state.grey) {
      return(
        <p className='wrap_special'>
          {this.state.grey.map(hey => (
            <p className='darth'>
            <p className='all_fields'><img src={hey.profilePhoto && hey.profilePhoto != null ? hey.profilePhoto : profile} id='prof_search'/></p>
              <p className='all_fields'>{hey.name}</p>
                <p className='all_fields'>{hey.lastname}</p>
                  <p className='all_fields'>Языки преподавания: &nbsp;{hey.subject.map(sub => (
                 <p>{sub}</p>
                 ))}</p>
              <p className='all_fields'>Город: &nbsp; {hey.city}</p>
              <p className='all_fields' style={{
                opacity: (hey.telephone ? 1 : 0)
              }}>Связаться: &nbsp; {hey.telephone}</p>
              <p className='all_fields'>{hey.raiting.length > 1 ? 'Рейтинг ' + (hey.raiting.filter(rait => rait.length > 0).map(function(elt) {
                return /^\d+$/.test(elt) ? parseInt(elt) : 0;
              }).reduce((a, b) => a + b, 0) / (hey.raiting.length - 1)).toFixed(1) + ' из 5' : null}</p>
              <p className='all_fields'>{hey.raiting.length > 1 ? 'Основано на  ' + hey.raiting.length + '  отзывах' : null }</p>

            </p>
          ))}
        </p>
       )
    }
  }

foo1 = () => {
  if(this.state.data) {
        return (
        <p className='wrap_foot6' style={{
          top: (this.state.grey.length > 1 ? -130 : 100)
          }}><Footer />
        </p>
    )
  }
}

forma = () => {
  if(this.state.data) {
    return (
      <p className='wrap_myForm'>
        <form action='/searchteacher' method='GET' className='find_forma'>
            <input type='text' name='subject' ref={this.one} placeholder="Язык, например 'spanish'" required/>
              <input type='text' name='city' ref={this.two} placeholder='Город' />
            <button onClick={this.fin} id='but12'>Найти</button>
        </form>
      </p>
    )
  }
}

  render() {

    return (
      <p className='wrap_find_forma'>
        <p style={{
          display: (this.state.user ? 'block' : 'none')
          }}><Mobile  /></p>
          <p style={{
             opacity:(this.state.grey.length > 0 ? 1 : 0)
              }} id='teach_foryou'>Преподаватели для Вас</p>
              {this.forma()}
              {this.newer()}
              <i style={{
                opacity: (this.state.grey.length < 1 ? 1 : 0)
              }} id='teach_obso' ref={this.re}>Найдите преподавателя рядом с Вами!</i>
          {this.foo1()}
        <i ref={this.cha} id='not_found'>Не найдено преподавателей</i>
      </p>
    )
  }
}

export default Search;
