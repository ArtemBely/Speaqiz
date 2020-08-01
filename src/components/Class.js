import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import axios from 'axios';
import { getClass } from './fetchData';
import Footer from './Footer';
import Mobile from './Mobile_menu';
import arrow from '../../public/images/arrow.svg';

class Class1 extends React.Component {

  constructor(props) {
    super(props)

    let info;
    let user;
    if (__isBrowser__) {
      info = window.__INITIAL_DATA__;
      user = window.__INITIAL_USER__;
    }

    this.state = {
      info,
      user,
      loading: info ? false : true
    }
 }


  componentDidMount() {
   if(!this.state.info) {
     this.fetchData(this.props.match.params.id)
   }
 }

 fetchData = (id) => {
   this.setState({ loading: true });

   getClass(id).then(info =>
      this.setState({ info: info, loading: false }));
 }

suc = () => {
  if(this.state.info) {
    let arr = this.state.info.merged.filter(inf => inf._id === this.props.match.params.id);
    console.log(arr);

  return (
        <p className='wrap_class'>
           {arr[0].padavans}
        </p>
   )
  }
}

students = () => {
if(this.state.info && this.state.user) {

  let every = this.state.info.student.filter(stud => stud.teacher === this.state.user.email);
  let arr = this.state.info.merged.filter(inf => inf._id === this.props.match.params.id);
  let neo = every.filter(stu => stu.class === arr[0].padavans);

    let fil0 = this.state.user.themes.filter(fil => fil.parts.length > 1);
    let fil = fil0.map(fil => fil.parts);

      let hew = [].concat.apply([], fil);
      let ios0 = hew.filter(hew => typeof hew === 'object');
        let ios = ios0.map(hew => hew.parts);
        console.log(ios0);
          let iosNew = [].concat.apply([], ios);


        let iosNeo = iosNew.map(ios => ios._id);

    let filtered = iosNeo.filter(el => el != undefined);

    let length1 = filtered.length;

 return(
   <p className='wrap_students'>
   <p className='compl' id='compl_task'>Выполненные задания:</p>
   <p className='compl' id='last'>Последнее посещение:</p>
     {neo.map(ever => (
       <p className='ever'>
         <p className='last'>{ever.name} &nbsp; {ever.lastname}</p>
          <p className='wr_ta'>
          {filtered.map((fil, index) => (
            <p className='ea_ta' style={{
              backgroundColor:(index < ever.scores ? 'lawngreen' : 'white')
            }}></p>
          ))}</p>
          <p id='proc'>{ever.scores !==0  ? (ever.scores / length1 * 100).toFixed(1) + '%' : '0%'}</p>
          <p id='timestamp'>{ever.timestamp}</p>
       </p>
     ))}
   </p>
 )
 }
}

 themes = () => {
   if(this.state.user) {
     return(
       <p className='wrap_thema'>
          {this.state.user.themes.map(theme => (
            <p>{theme.themes}</p>
          ))}
       </p>
     )
   }
 }

foo3 = () => {
  if(this.state.user) {
    return (
      <p className='wrap_foot2'><Footer /></p>
    )
  }
}

  render() {


    return (
      <p>
        <Mobile />
          <NavLink to='/profile' className='nav_to'><img src={arrow} id='ar2'/>Главная</NavLink>
          {this.suc()}
          {this.themes()}
          {this.students()}
          {this.foo3()}
      </p>
    )
  }
}

export default Class1;
