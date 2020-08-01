import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';

class Add extends React.Component {

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }
  }

  feedback = () => {
    if(this.state.user) {
      let filt = this.state.user.feedback.filter(fil => fil.length > 3);
      return(
        <p id='wrap_comments' style={{
          textAlign: (filt.length > 0 ? 'start' : 'center')
        }}>
          {filt.length > 0 ? filt.map((filt, index) => (
            <p className='each_comment'>{index + 1 + '.  ' + filt}</p>
          )) : "Отзывов пока нет, cоздавайте новые программы обучения и повышайте свой рейтинг среди Ваших учеников."}
        </p>
      )
    }
  }

  render() {
    return(
      <Spring
          from={{opacity: 0, top: 60}}
          to={{opacity: 1, top: 70}}
          config={{duration: 400}}>
          {props =>
          <p style={props} className='feedBack'>
          <p id='give_back'>Обратная связь</p>
            {this.feedback()}
            <NavLink to='/rait' id='nav_rait2'>Вернуться</NavLink>
          </p>
        }
    </Spring>
    )
  }
}

export default Add;
