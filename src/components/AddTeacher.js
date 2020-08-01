import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';

class AddTeacher extends React.Component {

  render() {
    return(
      <Spring
      from={{opacity: 0, top: 28}}
      to={{opacity: 1, top: 33}}
      config={{duration: 200}}>
      {props =>
      <p style={props} className='prop'>
        <form action='/profile' method='POST' className='addteach_forma'>
           <input type='text' name='teacher' placeholder='Добавить педагога' required />
           <button type='submit' className='but_all'>Добавить</button>
        </form>
        <form action='/profile/class' method='POST' className='addteach_forma'>
           <input type='text' name='class' placeholder='Добавить класс' required />
           <button type='submit' className='but_all'>Добавить</button>
        </form>
        <form action='/profile/school' method='POST' className='addteach_forma'>
           <input type='text' name='school' placeholder='Добавить универ' required />
           <button type='submit' className='but_all'>Добавить</button>
        </form>
        <form action='/profile/city' method='POST' className='addteach_forma'>
           <input type='text' name='city' placeholder='Изменить город' required />
           <button type='submit' className='but_all'>Добавить</button>
        </form>
        <form action='/profile/subject' method='POST' className='addteach_forma'>
           <input type='text' name='subject' placeholder='Добавить/Изменить язык' required />
           <button type='submit' className='but_all'>Добавить</button>
        </form>
        <NavLink to='/profile' id='cancel5'>Отменить</NavLink>
      </p>
    }
    </Spring>
    )
  }
}

export default AddTeacher;
