import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';
import '../../public/styles/style.css';

class Add extends React.Component {

  render() {
    return(
      <Spring
      from={{opacity: 0, top: 60}}
      to={{opacity: 1, top: 70}}
      config={{duration: 400}}>
      {props =>
      <p style={props} className='addi'>
        <form action='/add' method='POST' id='post_form1'>
           <input type='text' name='padavans' placeholder="Добавить класс, например: 10a" required />
           <button type='submit' id='sub2'>Добавить</button>
        </form>
        <i id='separate3'>*При добавлении ученика указывайте его имя фамилие на кириллице</i>
        <NavLink to='/profile' id='cancel1'>Отменить</NavLink>
      </p>
    }
    </Spring>
    )
  }
}

export default Add;
