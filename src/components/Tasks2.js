import React from 'react';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import { NavLink } from 'react-router-dom';
import arrow from '../../public/images/arrow.svg';

class Tasks2 extends React.Component{

  constructor() {
    super()

    let task;
    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      task = window.__INITIAL_DATA__;
    }
    this.state = {
      task,
      user
    }
  }

detect = () => {
  if(this.state.task && this.state.user) {
    let one = this.state.task.user.filter(task => task.email === this.state.user.teacher);
    let two = one[0].themes.filter(fil => fil.themes === this.props.match.params.id);
    let three = two[0].parts;
    return (
      <p className='wrap_tasks4'>
        {three.map((th, index) => (
          <NavLink to={'/students/' + this.props.match.params.id + '/' + th.title} className='each_wrapTask' style={{
            display: (index === 0 ? 'none' : 'grid')
          }}>{th.title}</NavLink>
        ))}
      </p>
    )
  }
}

  render() {
    return(
      <p id='wrap_task5'>
       <NavLink to='/profile' className='com_main2'><img src={arrow} id='arrow'/>Главная</NavLink>
        <p id='parts2'>Разделы</p>
        {this.detect()}
      </p>
    )
  }
}

export default Tasks2;
