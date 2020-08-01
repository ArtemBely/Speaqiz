import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';

class Themes extends React.Component{

  render() {
    return (
      <Spring
      from={{opacity: 0, top: 40}}
      to={{opacity: 1, top: 48}}
      config={{duration: 300}}
      >
      {props =>
      <p className='newThemes' style={props}>

        <form action='/themes' method='POST' id='post_form2'>
          <input type='text' name='themes' placeholder='Название темы' required/>
          <input type='hidden' name='parts' value=''/>
          <button type='submit' id='but5'>Добавить</button>
        </form>
        <NavLink to='/profile' id='cancel2'>Отменить</NavLink>
      </p>
    }
    </Spring>
    )
  }
}

export default Themes;
