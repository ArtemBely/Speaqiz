import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops.cjs';


class AddPhoto extends React.Component{

  constructor() {

    super()

    this.inp = React.createRef();
    this.cover = React.createRef();
  }

  componentDidMount() {
    setInterval(() => {

      if(this.inp.current && this.inp.current.files.length == 1) {
          this.cover.current.classList.add('toggi');
        }

      else if(this.cover.current) {
          this.cover.current.classList.remove('toggi');
      }
    },1000);
  }

  render() {
    return(
      <Spring
      from={{top: -15, opacity: 0}}
      to={{top: -10, opacity: 1}}
      config={{duration: 500}}
      >
      {props =>
      <p className='choose_photo' style={props}>
        <form action='/newpost/photo' method='POST' id='fo' encType="multipart/form-data">
           <p id='cov_inp' ref={this.cover}><input type='file' name='photo' ref={this.inp} id='name_cover'/>
           Выбрать фото</p>
           <button type='submit' id='but3'>Установить фото</button>
        </form>
        <NavLink to='/profile' id='close1'>Отменить</NavLink>
      </p>
    }
    </Spring>
    )
  }
}

export default AddPhoto;
