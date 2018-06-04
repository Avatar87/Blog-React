import React, { PureComponent, Fragment } from 'react';

import UserPage from '../components/UserPage';
import Loading from '../components/Loading';

export default class UserContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: false
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const path = require('./userlist.json');

    this.setState({ loading: true });
    
    //fetch(`https://jsonplaceholder.typicode.com/users/${match.params.userId}`)
      //.then((response) => response.json())
      //.then((user) => {
        this.setState({
          user: path[match.params.userId-1],
          loading: false
        });
      //})
      //.catch(() => {
        //this.setState({
          //user: {},
          //loading: false
        //});
     //});
  }

  render() {
    const { user, loading } = this.state;

    return (
      <Fragment>
        { loading ? <Loading /> : <UserPage {...user} /> }
      </Fragment>
    );
  }
}
