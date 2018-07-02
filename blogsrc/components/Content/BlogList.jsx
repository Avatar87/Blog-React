import './Content.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Blog from './Blog';

export default class BlogList extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
    )
  };

  static defaultProps = {
    blogs: []
  };

  render() {
    const { blogs } = this.props; 
    return (
      <div className = "wrap">
        <div className = "content1" id = "blogs">
          <h1 className = "mt-4"> Blogs list </h1>
          {blogs.map((blog, idx) => <Blog key={idx} blog={blog}/>)}
        </div>
      </div>
    );
  }
}