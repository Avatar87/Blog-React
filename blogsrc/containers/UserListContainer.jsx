import React, { PureComponent } from 'react';

import UserList from '../components/Users/UserList';
import Loading from '../components/Loading';

export default class UserListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false
    }
  }

  componentDidMount() {

  const path = require('./userlist.json');
    this.setState({ loading: true });
    //fetch('./comments.json')
      //.then((response) => response.json())
      //.then((users) => {
        this.setState({
          users: path,
          loading: false
        //});
      })
      
      //.catch(() => {
        //this.setState({
         // users: [],
          //loading: false
       // });
      //});
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>{ loading ? <Loading /> : <UserList users={users} /> }</div>
    );
  }
}