import './BlogPage.scss';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Comments from '../Comments';
import CommentsForm from '../CommentsForm';

export default class BlogPage extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    author: PropTypes.string,
    authorid: PropTypes.number,
    datetime: PropTypes.string,
  }

constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleSend = (comment) => {
  if (comment.name !== '' && comment.text !== '') {
    const { comments } = this.state;
    this.setState({
      comments: comments.concat([comment])     
    });
    }
  }

  renderProps = () => {
    const { id, text, author, authorid, datetime } = this.props
    return [id, text, author]
      .map((val, key) => <li key={key}>{val}</li>);
  };

  render() {
  const { id, text, author, authorid, datetime } = this.props;
  const { comments } = this.state;

    return (
      <Fragment>
        <div className = "blogcontent">
          <h1 className = "mt-4"> Blog {id} </h1>
          <p className="lead">
          by&nbsp;
          <Link to={`/users/${authorid}`}>{author}</Link>
          </p>
          {text}
          <hr/>
          <p>Posted on {datetime}</p>
          <hr/>
          <CommentsForm onSend={this.handleSend} />
          <Comments items={comments} />
        </div>
      </Fragment>
    );
  }
}
