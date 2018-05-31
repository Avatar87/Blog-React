import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class User extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    }).isRequired
  };

  render() {
    const { user } = this.props; 
    return (
      <div>
        {user.name} ({user.email})
      </div>
    );
  }
}
