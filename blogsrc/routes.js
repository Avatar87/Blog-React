import UserListContainer from './containers/UserListContainer';
import User from './containers/UserContainer';
import Content from './components/Content/Content';
import Globalinfo from './components/Main';
import Blog from './containers/BlogContainer';
import BlogListContainer from './containers/BlogListContainer';

export default [
  {
    path: '/Users',
    component: UserListContainer,
    exact: true
  },
  {
    path: '/users/:userId',
    component: User,
    exact: true
  },
  {
    path: '/blogs/:blogId',
    component: Blog,
    exact: true
  },
  {
    path: '/Content',
    component: Content,
    exact: true
  },
  {
    path: '/Index',
    component: Globalinfo,
    exact: true
  },
  {
    path: '/blogs',
    component: BlogListContainer,
    exact: true
  }

]