import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadBlogs } from 'actions/blogs';

import UserContainer from 'containers/UserContainer';
import BlogList from '../Content/BlogList';

class UserPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    blogs: PropTypes.array
  }

  componentDidMount() {
    const { load } = this.props;

    load();
  }

  renderProps = () => {
    const { name, email} = this.props
    return [name, email]
      .map((val, key) => <li key={key}>{val}</li>);
  };

  render() {

    const { blogs, loading, name } = this.props;
    let resultblog = blogs.filter(blogs => blogs.author == name);
    let empty = '';
    if (resultblog.length == 0) {empty = 'This user has no active blogs'};
    
    return (
      <Fragment>
        <ul className="UserPage">
          {this.renderProps()}
        </ul>      
        <BlogList blogs={resultblog}/>
        {empty}
      </Fragment>
    );
  }
}



function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogs: state.blogs.blogs,
    loading: state.blogs.loading
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadBlogs(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);