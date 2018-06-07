import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import BlogList from '../components/Content/BlogList';
import Loading from '../components/Loading';

import { loadBlogs } from 'actions/blogs';

class BlogListContainer extends PureComponent {

  componentDidMount() {
    const { load } = this.props;

    load();
  }

  render() {
    const { blogs, loading } = this.props;

    return (
      <div>{ loading ? <Loading /> : <BlogList blogs={blogs} /> }</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer);