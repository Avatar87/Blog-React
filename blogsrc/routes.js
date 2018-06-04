import UserListContainer from './containers/UserListContainer';
import User from './containers/UserContainer';
import Content from './components/Content/Content';
import App from './index';

export default [
  {
    path: '/Users',
    component: UserListContainer,
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
    path: '/Index',
    component: App,
    exact: true
  }


]