import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import astronaut from '../../public/images/astronaut.svg';
import arrow from '../../public/images/arrow.svg';

class Special extends React.Component {

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
    check: false,
    count: 0
  }

  this.two = React.createRef();
  this.three = React.createRef();
  this.four = React.createRef();
  this.five = React.createRef();
  this.six = React.createRef();
  this.seven = React.createRef();
  this.eight = React.createRef();
  this.nine = React.createRef();
  this.but = React.createRef();
  this.but2 = React.createRef();
  this.gogo = React.createRef();
  this.inp2 = React.createRef();
  this.modal = React.createRef();
}


detect = () => {
  if(this.state.user && this.state.task) {
    let one = this.state.task.user.filter(task => task.email === this.state.user.teacher);
    let two = one[0].themes.filter(fil => fil.themes === this.props.match.params.id);
    let three = two[0].parts;
    let four = three.filter(fi => fi.title === this.props.match.params.pathParam1);
    let five = four[0].parts;

    let six = five.filter(six => six._id === this.props.match.params.pathParam2);
    let fiv = six[0];


    return (
      <p className='each_audio'>
        <p className='each_audio1 spec'>{fiv.title2}</p>

          <p className='each_audio1' ref={this.two} onClick={(event) => {
            this.two.current.classList.toggle('colory');
            let new3 = document.querySelectorAll('.each_audio1');
            let i;
            for(i=2; i < new3.length; i++) {
              new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
            }
            if(event.target.innerHTML === fiv.right) {
              this.setState({ check: true });
            }
            else {
              this.setState({ check: false });
            }

          }}>
          {fiv.var2}</p>

           <p className='each_audio1' ref={this.three} onClick={(event) => {
             this.three.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 2 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var3 ? 'flex': 'none')
           }}>{fiv.var3}</p>

           <p className='each_audio1' ref={this.four} onClick={(event) => {
             this.four.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 3 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var4 ? 'flex' : 'none')
           }}>{fiv.var4}</p>

           <p className='each_audio1' ref={this.five} onClick={(event) => {
             this.five.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 4 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var5 ? 'flex' : 'none')
           }}>{fiv.var5}</p>

           <p className='each_audio1' ref={this.six} onClick={(event) => {
             this.six.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 5 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var6 ? 'flex' : 'none')
           }}>{fiv.var6}</p>

           <p className='each_audio1' ref={this.seven} onClick={(event) => {
             this.seven.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 6 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var7 ? 'flex' : 'none')
           }}>{fiv.var7}</p>

           <p className='each_audio1' ref={this.eight} onClick={(event) => {
             this.eight.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 7 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var8 ? 'flex' : 'none')
           }}>{fiv.var8}</p>

           <p className='each_audio1' ref={this.nine} onClick={(event) => {
             this.nine.current.classList.toggle('colory');
             let new3 = document.querySelectorAll('.each_audio1');
             let i;
             for(i=1; i < new3.length; i++) {
               if( i == 8 ) {
                 continue;
               }
               new3[i].classList.contains('colory') ? new3[i].classList.remove('colory') : null;
             }
             if(event.target.innerHTML === fiv.right) {
               this.setState({ check: true });
             }
             else {
               this.setState({ check: false });
             }

           }} style={{
             display: (fiv.var9 ? 'flex' : 'none')
           }}>{fiv.var9}</p>

           <p className='each_audio1' style={{
            display: (fiv.coverImageName ? 'block' : 'none')
          }}>
          <img src={fiv.coverImageName} id='aydim'/></p>

        <audio controls className='each_audio1' style={{
          display: (fiv.audio ? 'block' : 'none'),
          height: (window.screen.width < 1000 ? 40 : null)
        }}>
       <source src={fiv.audio ? fiv.audio : null} />
        </audio>


        <form action={'/students/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} method='POST' className='check_form2' style={{
            display:(fiv.var3 ? 'none' : 'flex')
             }}>
             <input name='completed' type='hidden' value={fiv._id} />
             <input type='hidden' name='checking' value={this.state.count} />
             <input type='text' name='answer' id='inp_2' ref={this.inp2} onChange={this.go2} required />
            <button type='submit' id='but11' ref={this.but2} onClick={(event) => {
              if(this.inp2.current.value.toLowerCase() != fiv.right.toLowerCase()) {
                this.modal.current.classList.add('gri');
                 this.setState({ count: this.state.count + 1 });

                  if(this.state.count < 1) {
                    event.preventDefault();
                    console.log(this.state.count);
                  }
                  else {
                    alert('Задание заблокировано до завтра');
                 }
               }
              else {
                alert('Правильно!');
                console.log(this.inp2.current.value);
              }
            }}>Ответить</button>
        </form>

        <form action={'/students/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} method='POST'>
         <input type='hidden' value={fiv.right} />
         <input type='hidden' name='checking' value={this.state.count} />
         <input name='completed' type='hidden' value={fiv._id} />
           <p ref={this.gogo} onClick={(event) => {
             if(this.state.check) {
               alert('Правильно!');
             }
             else {
               event.preventDefault();
               this.modal.current.classList.add('gri');
               this.setState({ count: this.state.count + 1 });

                   if(this.state.count < 1) {
                     event.preventDefault();
                     console.log(this.state.count);
                   }
                   else {
                     alert('Задание заблокировано до завтра');
                  }
                  
               console.log(this.state.count);
             }
            }}>
           <button type='submit' ref={this.but} className='gen_but' style={{
              display:(fiv.var3 ? 'flex' : 'none')
            }}>Ответить
          </button>
          </p>
        </form>

      </p>
    )
  }
}

go = () => {
  if(this.state.user && this.state.task && this.but.current) {
    let use = this.state.user.completed;
    let use1 = use.filter(use => use === this.props.match.params.pathParam2);
    if(use1.length >= 1) {
      this.but.current.disabled = true
    }
  }
}

go2 = () => {
  if(this.state.user && this.state.task && this.but2.current) {
    let use2 = this.state.user.completed;
    let use3 = use2.filter(use => use === this.props.match.params.pathParam2);
    if(use3.length >= 1) {
      this.but2.current.disabled = true;
    }
    else { console.log(use3) }
  }
}

 control = () => {
   if(this.state.user && this.state.task) {
     let teacher = this.state.task.user;
       let fil1 = teacher.filter(fil1 => fil1.email === this.state.user.teacher)[0];
        let fil2 = fil1.themes.filter(fil2 => fil2.themes == this.props.match.params.id)[0];
        let fil3 = fil2.parts.filter(fil3 => fil3.title == this.props.match.params.pathParam1);
       let fil4 = fil3[0];
     let fil5 = fil4.theory[1];
     return (
       <p className='nested_window'>
           <p id='youre_wrong'>{this.state.count >=2 ?
              "Вы ответили неправильно, посмотрите теорию еще раз" :
              "Вы ответили неправильно, посмотрите теорию еще раз или попробуйте заново"}
             </p>
            <a href={fil5 ? fil5 : null} target='blank' id='targ' onClick={() => {
              this.setState({ count: 0 })
            }}
             style={{
              display: (fil5 ? 'grid' : 'none'),
              gridColumn: (this.state.count >= 2 ? '1 / 3' : '1 / 2')
            }}><p id='look_theory'>Посмотреть теорию</p></a>
          <p id='start_again' style={{
            gridColumn: (fil5 ? '2 / 3' : '1 / 3'),
            display: (this.state.count >= 2 ? 'none' : 'grid')
          }}>Начать заново</p>
       </p>
     )
   }
 }

  render() {
    return (
      <p className='task_special'>
      <NavLink to={'/students/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} className='nav_last'><img src={arrow} id='arrow'/>Назад</NavLink>
        {this.detect()}
          {this.go()}
        <i id='choose2'>*Выберите правильный
         вариант ответа или введите необходимое слово в зависимости от задания</i>
         <img src={astronaut} id='astro1'/>
         <p id='modal_window' ref={this.modal} onClick={() => {
           this.modal.current.classList.contains('gri') ? this.modal.current.classList.remove('gri') : null;
         }}>
          {this.control()}
         </p>
      </p>
    )
  }
}

export default Special;
