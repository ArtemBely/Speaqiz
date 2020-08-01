import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../../public/styles/style.css';
import arrow from  '../../public/images/arrow.svg';
import list from  '../../public/images/memo.svg';
import Footer from './Footer';

class Tasks extends React.Component{

  constructor() {
    super()

    let task;
    if(__isBrowser__) {
      task = window.__INITIAL_USER__;
    }
    this.state = {
      task,
      focus: false
    }

    this.one = React.createRef();
    this.two = React.createRef();
    this.three = React.createRef();
    this.four = React.createRef();
    this.file1 = React.createRef();
    this.file2 = React.createRef();
    this.file3 = React.createRef();
    this.file4 = React.createRef();
    this.facto = React.createRef();
    this.facto2 = React.createRef();
    this.det = React.createRef();
  }

  componentDidMount() {
    let cle = setInterval(() => {
      if(this.file1.current && this.file1.current.files.length == 1) {
        this.one.current.classList.add('tog');
      }
      else if(this.one.current) {
        this.one.current.classList.remove('tog');
      }
      if(this.file2.current && this.file2.current.files.length == 1) {
        this.two.current.classList.add('tog');
      }
      else if(this.two.current) {
        this.two.current.classList.remove('tog');
      }
      if(this.file3.current && this.file3.current.files.length == 1) {
        this.three.current.classList.add('tog');
      }
      else if(this.three.current) {
        this.three.current.classList.remove('tog');
      }
      if(this.file4.current && this.file4.current.files.length == 1) {
        this.four.current.classList.add('tog');
      }
      else if(this.four.current) {
        this.four.current.classList.remove('tog');
      }
      if(this.facto.current && this.facto.current.files.length == 1) {
        this.facto2.current.classList.add('tog');
      }
      else if(this.facto.current) {
        this.facto2.current.classList.remove('tog');
      }
    }, 1000);
  }


detect = () => {
  if(this.state.task) {
    let newTask = this.state.task.themes.filter(task => task.themes === this.props.match.params.id);
      let detective = newTask[0].parts;
      let taskFilter = detective.filter(fi => fi.title === this.props.match.params.pathParam1);
      let finishTasks = taskFilter[0].parts;

      let theory = taskFilter[0].theory;
      let focus = taskFilter[0].parts;
      let filterTheory = theory.filter(theo => theo.length > 1);


    return(
      <p className='main_wrap_task'>
      <p className='wrap_tasks2'>

      <p id='none_tasks' style={{
        display: (finishTasks.length > 1 ? 'none' : 'grid')
      }}>У Вас пока нет заданий, добавьте свое первое задания,
       чтобы Ваши ученики смогли его видеть!</p>

        {finishTasks.map((fin, index)=> (
          <p className='each_task' onClick={() => {

            let focus1 = focus.findIndex(foc => foc._id == fin._id);
            let go = document.querySelectorAll('.each_task');

            let i;
            for(i=0; i<go.length; i++) {
              i == focus1 ?
              go[i].classList.toggle('gogo') :
              go[i].classList.remove('gogo');
            }

          }} ref={this.det} style={{
            display: (index === 0 ? 'none' : 'grid')
          }}>
              <p className='title2'>{fin.title2}</p>
                <p className='title2 special2'>{fin.var2}</p>
                  <p className='title2 special2' style={{
                    display: (fin.var3 ? 'grid' : 'none')
                   }}>{fin.var3}</p>
                   <p className='title2 special2' style={{
                     display: (fin.var4 ? 'grid' : 'none')
                   }}>{fin.var4}</p>
                    <p className='title2 special2' style={{
                      display: (fin.var5 ? 'grid' : 'none')
                    }}>{fin.var5}</p>
                    <p className='title2 special2' style={{
                      display: (fin.var6 ? 'grid' : 'none')
                    }}>{fin.var6}</p>
                    <p className='title2 special2' style={{
                      display: (fin.var7 ? 'grid' : 'none')
                    }}>{fin.var7}</p>
                    <p className='title2 special2' style={{
                    display: (fin.var8 ? 'grid' : 'none')
                    }}>{fin.var8}</p>
                  <p className='title2 special2' style={{
                  display: (fin.var9 ? 'grid' : 'none')
                }}>{fin.var9}</p>
             <p style={{
               display: (fin.coverImageName && fin.coverImageName != null ? 'block' : 'none')
               }}>
               <img src={fin.coverImageName ? fin.coverImageName : null} className='main_image'/>
             </p>
            <audio controls id='audi1' style={{
              display: (fin.audio ? 'block' : 'none')
              }}>
                <source src={fin.audio} className='main_image'/>
            </audio>
            <a href={'/newpost/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1 + '/' + fin._id} id='delete1' style={{
              width: (window.screen.width > 1000 ? 140 : 55)
            }}>{window.screen.width > 1000 ? 'Удалить задание' : 'Удалить'}</a>
            <p className='wrap_list1'><img src={list} id='listo'/></p>
          </p>
        ))}
      </p>

        <p id="pdf">
          {filterTheory && filterTheory.length > 0 ? filterTheory.map((filt, index) => (
            <p id='pdf2'><a href={filt} target='blank' className='hrefdoc'>Теоретический материал № {index + 1}</a></p>
          )) : null}
        </p>

      </p>
    )
  }
}

foot4 = () => {
  if(this.state.task) {
    return (
      <p className='wrap_foot7'><Footer /></p>
    )
  }
}

check = () => {
  if(this.state.task) {
    return (
      <p className='wrap_tasks6'>
       <p id='add_the'>Добавьте теоретический материал в формате pdf в этот раздел, который смогут посмотреть Ваши ученики</p>
         <form action={'/newpost2/theory/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} method='POST' encType="multipart/form-data" id='forma5'>
           <p id='wrap_newfile' ref={this.facto2}>Добавить pdf файл<input type='file' name='theo' ref={this.facto} /></p>
           <button type='submit' id='but13'>Добавить</button>
         </form>
      </p>
    )
  }
}

check2 = () => {
  if(this.state.task) {
    return (
      <p className='wrap_all_pi'>
        <p className='wrap_task3'>
            <p className='add_task2'>Добавить задание (тест)</p>

            <form action={'/newpost/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} method='POST' encType="multipart/form-data" id='test2' className='forma_task'>
                <input type='text' name='title2' placeholder='Введите текст задания' required/>
                  <input type='text' name='var2' placeholder='1-ый вариант ответа' required/>
                  <input type='text' name='var3' placeholder='2-ой вариант ответа' required/>
                    <input type='text' name='var4' placeholder='3-ий вариант ответа' required/>
                      <input type='text' name='var5' placeholder='4-ый вариант ответа' required/>
                        <input type='text' name='var6' placeholder='5-ый вариант ответа (если есть)' />
                        <input type='text' name='var7' placeholder='6-ой вариант ответа (если есть)' />
                      <input type='text' name='var8' placeholder='7-ой вариант ответа (если есть)' />
                    <input type='text' name='var9' placeholder='8-ой вариант ответа (если есть)' />
                  <input type='text' name='right' placeholder='Правильный ответ' required/>
                <div className='wrap_file' ref={this.one}>Добавить картинку<input type='file' name='cover' ref={this.file1} /></div>
             <div className='wrap_file' ref={this.two}>Добавить аудио файл<input type='file' name='audio' ref={this.file2} accept='.mp3,audio/*' /></div>
              <button type='submit' id='but10'>Добавить задание</button>
            </form>
            </p>

            <p className='wrap_task3' id='super_form'>
            <p className='add_task2' id='add_word'>Добавить задание (вставить слово)</p>
            <form action={'/newpost/upgrade/' + this.props.match.params.id + '/' + this.props.match.params.pathParam1} method='POST' encType="multipart/form-data" id='test1' className='forma_task'>
                <input type='text' name='title2' placeholder='Напишите описание задания' required/>
                  <input type='text' name='var2' placeholder='Текст задания' required/>
                    <input type='text' name='right' placeholder='Правильный ответ' required/>
                    <div className='wrap_file' ref={this.three}>Добавить картинку<input type='file' ref={this.file3} name='cover'/></div>
                  <div className='wrap_file' ref={this.four}>Добавить аудио файл<input type='file' name='audio' ref={this.file4} accept='.mp3,audio/*' /></div>
                <button type='submit' id='but9'>Добавить задание</button>
             </form>
            </p>
        </p>
    )
  }
}

  render() {
    return(
      <p className='wr_cla2'>
       <NavLink to='/profile' id='arrow_wr'><img src={arrow} id='arrow' />Главная</NavLink>
        {this.check()}
        {this.check2()}

        {this.detect()}
        {this.foot4()}
      </p>
    )
  }
}

export default Tasks;
