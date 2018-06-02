import UserList from './containers/UserListContainer';
import User from './containers/UserContainer';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import App from './index';

export default [
  {
    path: '/Users',
    component: UserList,
    exact: true
  },
  {
    path: '/Users/:userId',
    component: User,
    exact: true
  },
  {
    path: '/Content',
    component: Content,
    exact: true
  },
  {
    path: '/Header',
    component: Header,
    exact: true
  },
  {
    path: '/',
    component: App,
    exact: true
  },
]