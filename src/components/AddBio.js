import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style2.css';


class AddBio extends React.Component{
  render() {
    return(
      <p className='form_bio'>
        <form action='/newpost/bio' method='POST' id='bio'>
           <textarea type='text' name='bio' id='text_bio' placeholder='Добавляйте информацию в произвольном порядке! Нам важна Ваша креативность'></textarea>
           <button type='submit' id='but4'>Добавить биографию, достижения, опыт</button>
        </form>
        <NavLink to='/profile' className='re'>Отменить</NavLink>
      </p>
    )
  }
}

export default AddBio;
