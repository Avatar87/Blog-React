import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class User extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      email: PropTypes.string
    }).isRequired
  };

  render() {
    const { user } = this.props; 
    return (
      <div>
        <Link to={`users/${user.id}`}>{user.name} ({user.email})</Link>
      </div>
    );
  }
}
