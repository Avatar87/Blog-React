import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { loadUsers } from 'actions/users';

import UserList from '../components/Users/UserList';
import Loading from '../components/Loading';

class UserListContainer extends PureComponent {

componentDidMount() {
    const { load } = this.props;

    load();
  }

  render() {
    const { users, loading } = this.props;

    return (
      <div>{ loading ? <Loading /> : <UserList users={users} /> }</div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    users: state.users.users,
    loading: state.users.loading
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadUsers(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);