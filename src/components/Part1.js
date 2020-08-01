import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import { NavLink, Route } from 'react-router-dom';
import '../../public/styles/style.css';
import arrow from '../../public/images/arrow.svg';

class Part1 extends React.Component{

constructor(props) {
  super()

  let thema;
  if(__isBrowser__) {
    thema = window.__INITIAL_USER__;
  }

  this.state = {
    thema
  }
}


app = () => {
  if(this.state.thema) {
    let main = this.state.thema.themes.filter(thema => thema.themes === this.props.match.params.id);

    return(
      <p className='thema1'>
       <NavLink to='/profile' id='mainlink'><img src={arrow} id='arrow'/>Главная</NavLink>
        <p className='main_title'>{main[0].themes}</p>
         <NavLink to={'/newPart/' + main[0].themes} className='link2'>Добавить раздел</NavLink>
          <Route exact path={'/newPart/' + main[0].themes}>
              <p>
                  <form action={'/themes/' + main[0].themes} method='POST' id='for'>
                      <input type='text' name='title' placeholder='Добавить раздел' required />
                          <input type='hidden' name='parts' value=''/>
                          <input type='hidden' name='theory' value=''/>
                      <button type='submit' id='but8'>Добавить</button>
                  </form>
                  <NavLink to={'/themes/' + main[0].themes} id='nav'>Отменить</NavLink>
              </p>
          </Route>
      </p>
    )
  }
}

newPart = () => {
  if(this.state.thema) {
    let main = this.state.thema.themes.filter(thema => thema.themes === this.props.match.params.id);
    let newPart2 = main[0].parts;

    return(
      <p className='wrap_part3'>
        {newPart2.map((neo, index) => (
          <NavLink to={'/themes/' + this.props.match.params.id + '/' + neo.title} className='link_part' style={{
            display: (index === 0 ? 'none' : 'grid')
            }}>
          <p className='wrap_link'>{neo.title ? neo.title : null}</p></NavLink>
        ))}
      </p>
    )
  }
}

  render() {
    return (
      <p className='wrap_thema2'>
          {this.app()}
          {this.newPart()}
      </p>
    )
  }
}

export default Part1;
