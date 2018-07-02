import React, { PureComponent, Fragment } from 'react';

import BlogPage from '../components/BlogPage';
import Loading from '../components/Loading';

export default class BlogContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blog: {},
      loading: false
    }
  }

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });
    
    fetch(`http://localhost:3000/blogs/${match.params.blogId}`)
      .then((response) => response.json())
      .then((blog) => {
        this.setState({
          blog,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          blog: {},
          loading: false
        });
     });
  }

  render() {
    const { blog, loading } = this.state;

    return (
      <Fragment>
        <div className = "wrap">
          <div className = "content1">
        { loading ? <Loading /> : <BlogPage {...blog} /> }
          </div>
        </div>
      </Fragment>
    );
  }
}