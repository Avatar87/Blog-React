import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class User extends PureComponent {
  static propTypes = {
    blog: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      author: PropTypes.string,
    }).isRequired
  };

  render() {
    const { blog } = this.props; 
    return (
      <div>
        <Link to={`/blogs/${blog.id}`}> Blog {blog.id} by {blog.author} </Link>
      </div>
    );
  }
}
