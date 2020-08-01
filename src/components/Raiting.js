import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import star from '../../public/images/star.svg';

class Raiting extends React.Component{

  constructor() {

    super()

    this.state ={
      clicked: false,
      raiting: 1
    }

    this.inp = React.createRef();
  }


  render() {
    return(
      <Spring
      from={{top: -20, opacity: 0}}
      to={{top: -16, opacity: 1}}
      config={{duration: 200}}
      >
      {props =>
      <p className='give_feed' style={props}>
         <form id='rait' action='/raiting' method='POST'>
           <p className='wrap_star'>
            <img src={star} className='star' id='star' onClick={() => {
               this.setState({ raiting: 1 });
               this.setState({ clicked: true });
               let i = document.querySelectorAll('.star');
               i[4].classList.remove('opa');
               i[3].classList.remove('opa');
               i[2].classList.remove('opa');
               i[1].classList.remove('opa');
               let q;
               for(q=0; q < i.length - 4; q++) {
                 i[q].classList.add('opa');
               }
             }}/>

               <img src={star} className='star' onClick={() => {
                 this.setState({ raiting: 2 });
                 this.setState({ clicked: true });
                 let i = document.querySelectorAll('.star');
                 i[4].classList.remove('opa');
                 i[3].classList.remove('opa');
                 i[2].classList.remove('opa');
                 let q;
                 for(q=0; q < i.length - 3; q++) {
                   i[q].classList.add('opa');
                 }
               }}
               onMouseOver={() => {
                 if(!this.state.clicked) {
                 let i = document.querySelectorAll('.star');
                 i[0].classList.add('opa');
                 i[1].classList.add('opa');
               }
               }}
               onMouseLeave={() => {
                 if(!this.state.clicked) {
                 let i = document.querySelectorAll('.star');
                 i[0].classList.remove('opa');
                 i[1].classList.remove('opa');
               }
               else {
                 i[2].classList.contains('opa') ? i[2].classList.remove('opa') : null;
                 i[3].classList.contains('opa') ? i[3].classList.remove('opa') : null;
                 i[4].classList.contains('opa') ? i[4].classList.remove('opa') : null;
               }
               }}/>

                <img src={star} className='star' onClick={() => {
                  this.setState({ raiting: 3 });
                  this.setState({ clicked: true });
                  let i = document.querySelectorAll('.star');
                  i[4].classList.remove('opa');
                  i[3].classList.remove('opa');
                  let q;
                  for(q=0; q < i.length - 2; q++) {
                    i[q].classList.add('opa');
                  }
                }}
                onMouseOver={() => {
                  if(!this.state.clicked) {
                  let i = document.querySelectorAll('.star');
                  i[0].classList.add('opa');
                  i[1].classList.add('opa');
                  i[2].classList.add('opa');
                }
                }}
                onMouseLeave={() => {
                  if(!this.state.clicked) {
                  let i = document.querySelectorAll('.star');
                  i[0].classList.remove('opa');
                  i[1].classList.remove('opa');
                  i[2].classList.remove('opa');
                }
                else {
                  i[3].classList.remove('opa');
                  i[3].classList.add('opa0');
                }
                }}/>

               <img src={star} className='star' onClick={() => {
                 this.setState({ raiting: 4 });
                 this.setState({ clicked: true });
                 let i = document.querySelectorAll('.star');
                 i[4].classList.remove('opa');
                 let q;
                 for(q=0; q < i.length - 1; q++) {
                   i[q].classList.add('opa');
                 }
               }}
               onMouseOver={() => {
                 let i = document.querySelectorAll('.star');
                 if(!this.state.clicked) {
                 i[0].classList.add('opa');
                 i[1].classList.add('opa');
                 i[2].classList.add('opa');
                 i[3].classList.add('opa');
               }
               }}
               onMouseLeave={() => {
                 let i = document.querySelectorAll('.star');
                 if(!this.state.clicked) {
                 i[0].classList.remove('opa');
                 i[1].classList.remove('opa');
                 i[2].classList.remove('opa');
                 i[3].classList.remove('opa');
               }
               }}/>

             <img src={star} className='star' onClick={() => {
               this.setState({ raiting: 5 });
               this.setState({ clicked: true });
               let i = document.querySelectorAll('.star');
               let q;
               for(q=0; q < i.length; q++) {
                 i[q].classList.add('opa');
               }
             }}
             onMouseOver={() => {
               let i = document.querySelectorAll('.star');
               if(!this.state.clicked) {
               i[0].classList.add('opa');
               i[1].classList.add('opa');
               i[2].classList.add('opa');
               i[3].classList.add('opa');
               i[4].classList.add('opa');
             }
             }}
             onMouseLeave={() => {
               if(!this.state.clicked) {
               let i = document.querySelectorAll('.star');
               i[0].classList.remove('opa');
               i[1].classList.remove('opa');
               i[2].classList.remove('opa');
               i[3].classList.remove('opa');
               i[4].classList.remove('opa');
             }
             }}/>

           </p>
            <input type='hidden' ref={this.inp} name='scores' value={this.state.raiting}/>
             <textarea name='rait' id='textarea2' placeholder='Оставьте свой отзыв о Вашем учителе и не забудьте нажать на звездочки! Отзыв принимается также без сообщения'></textarea>
            <button type='submit' id='but10'>Оставить отзыв</button>
         </form>
         <NavLink to='/profile' className='cancel6'>Отменить</NavLink>
      </p>
     }
     </Spring>
    )
  }
}

export default Raiting;
