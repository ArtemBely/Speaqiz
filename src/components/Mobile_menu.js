import React from 'react';
import { NavLink } from 'react-router-dom';

class Mobile extends React.Component {

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }

    this.mobi = React.createRef();
    this.one = React.createRef();
    this.two = React.createRef();
    this.three = React.createRef();
    this.close = React.createRef();
  }

 move = () => {
   this.mobi.current.classList.toggle('hideFrom');
   this.one.current.classList.toggle('for_one');
   this.two.current.classList.toggle('for_two');
   this.three.current.classList.toggle('for_three');


     this.mobi.current.classList.contains('hideFrom') ?
      this.close.current.classList.remove('move_small') :
    this.close.current.classList.add('move_small')

 }

 appear = () => {
   if(this.state.user) {
     return(
       <p className='wrap_span' onClick={this.move} ref={this.close}>
          <p className='close1' ref={this.one} id='close_part1'></p>
           <p className='close1' ref={this.two} id='close_part2'></p>
          <p className='close1' ref={this.three} id='close_part3'></p>
       </p>
     )
   }
 }

componentDidMount() {
  if(this.close.current) {
  this.close.current.classList.add('move_small');
 }
}

  render() {
    return (
      <p className='mobile_menu' ref={this.mobi}>
      {this.appear()}
        <p className='wrap_mobile_links'>
          <NavLink to={this.state.user && this.state.user.teach === 'student' ? '/searchteacher' : '/profile'} className='links_mobile'>{this.state.user && this.state.user.teach === 'student' ? 'Найти учителя' : 'Главная'}</NavLink>
             <NavLink to='/myclasses' className='links_mobile' style={{
               display: (this.state.user && this.state.user.teach === 'student' ? 'block' : 'none')
             }}>Мои Классы</NavLink>
          <NavLink to={this.state.user && this.state.user.teach === 'student' ? '/myraiting' : '/rait'} className='links_mobile'>Мой рейтинг</NavLink>
        </p>

      </p>
    )
  }
}

export default Mobile;
