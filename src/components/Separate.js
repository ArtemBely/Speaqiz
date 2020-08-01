import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import done from '../../public/images/check.svg';
import arrow from '../../public/images/arrow.svg';

class Separate extends React.Component {

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
    user,
    random: ''
  }

  this.one = React.createRef();
  this.suc = React.createRef();
}

detect = () => {
  if(this.state.user && this.state.task) {
    let one = this.state.task.user.filter(task => task.email === this.state.user.teacher);
    let two = one[0].themes.filter(fil => fil.themes === this.props.match.params.id);
    let three = two[0].parts;
    let four = three.filter(fi => fi.title === this.props.match.params.pathParam1);
    let five = four[0].parts;

    return (
      <p className='wrap_audio'>
         {five.map((fiv, index) => (
           <p className='each_audio sla' style={{
             display: (index > 0 ? 'flex' : 'none')
             }}>
             <p className='ta'>задание &nbsp;{index}</p>
             <NavLink to={'/students/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1 + '/' + fiv._id} ref={this.suc} className='each_audio1 spec' style={{
               backgroundColor: (this.state.user.completed.filter(comp => comp == fiv._id).length == 1 ? 'green' : '#1E3657')
             }}>{this.state.user.completed.filter(comp => comp == fiv._id).length == 1 ? 'ВЫПОЛНЕНО!' : fiv.title2}<img src={this.state.user.completed.filter(comp => comp == fiv._id).length == 1 ? done : null} className='im_done' /></NavLink>
           </p>
         ))}
      </p>
    )
  }
}

  render() {
    return (
      <p className='wrap_alltasks'>
        <NavLink to='/profile' className='arrow_task'><img src={arrow} id='arrow'/>Главная</NavLink>
          {this.detect()}
      </p>
    )
  }
}

export default Separate;
