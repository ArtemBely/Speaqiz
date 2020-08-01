import Main from './Main';
import Student from './Student';
import Teacher from './Teacher';
import Enter from './Enter';
import Enter2 from './Enter2';
import Profile from './Profile';
import Profile_Teacher from './Profile_Teacher';
import Class1 from './Class';
import Part1 from './Part1';
import Tasks from './Tasks';
import Tasks2 from './Tasks2';
import Search from './Search';
import Separate from './Separate';
import Special from './Special';
import Rait from './Rait';
import MyRaiting from './MyRaiting';
import Professor from './Professor';
import MyClasses from './MyClasses';
import NoMatch from './NoMatch';
import { getClass } from './fetchData';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/registration_student',
    exact: true,
    component: Student
  },
  {
    path: '/registration_teacher',
    exact: true,
    component: Teacher
  },
  {
    path: '/signin',
    exact: true,
    component: Enter
  },
  {
    path: '/signin2',
    exact: true,
    component: Enter2
  },
  {
    path: ["/profile", "/add", "/themes", "/part", "/addteacher", "/addphoto", "/addbio", "/raiting", "/telegram"],
    exact: true,
    component: Profile
  },
  {
    path: '/searchteacher',
    exact: true,
    component: Search
  },
  {
    path: '/myclasses',
    exact: true,
    component: MyClasses
  },
  {
    path: ['/rait', '/feedback'],
    exact: true,
    component: Rait
  },
  {
    path: '/myraiting',
    exact: true,
    component: MyRaiting
  },
  {
    path: '/students/:id',
    exact: true,
    component: Tasks2
  },
  {
    path: '/professor/:id',
    exact: true,
    component: Professor
  },
  {
    path: '/separate/:id',
    component: Class1,
    fetchInitialData: () => getClass()
  },
  {
    path: '/students/:id/:pathParam1?',
    exact: true,
    component: Separate,
  },
  {
    path: '/students/:id/:pathParam1?/:pathParam2?',
    exact: true,
    component: Special,
  },
  {
    path: ['/themes/:id', '/newPart/:id'],
    exact: true,
    component: Part1
  },
  ,
  {
    path: ['/themes/:id/:pathParam1?', '/themes/:id/:pathParam1?/:pathParam2?'],
    exact: true,
    component: Tasks
  },
  {
    component: NoMatch
  }
]

export default routes;
