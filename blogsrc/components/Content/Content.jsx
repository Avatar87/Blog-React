import './Content.css';

import React, { Component } from 'react';
import classNames from 'classnames';

import Comments from '../Comments';
import CommentsForm from '../CommentsForm';
import UserList from '../Users/UserList';
import User from '../Users/User';

const path = require('../../containers/userlist.json');

export default class Content extends Component {
  static defaultProps = {
    size: 'big',
    
  }

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      users: path
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
  

  render () {
    const { size, children } = this.props;
    const { comments, users } = this.state;

    return (
    <div className="wrap">
      <div className="content1 col-lg-8"> 
        <section>
        <h1 className = "mt-4"> Blog 1 </h1>
        <p className="lead">
            by&nbsp;
            <a href="#">{users[0].name}</a>
        </p>
        <hr/>
        <p>Posted on January 1, 2018 at 12:00 PM</p>
        <hr/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, felis eu sodales dictum, eros lectus condimentum justo, id rhoncus mi orci condimentum ligula. Maecenas tortor dolor, aliquam ut mauris in, dictum rutrum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras tincidunt tincidunt efficitur. Curabitur tincidunt nisl sit amet vestibulum bibendum. Maecenas velit massa, gravida sed dictum id, venenatis eget mauris. Nunc sit amet blandit tortor, eget venenatis lectus. Vestibulum nec eros mi. Integer sit amet mattis urna, semper dictum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        </section>
        <section>
        Cras scelerisque orci non facilisis aliquet. Aenean fermentum nulla porttitor arcu pulvinar, non commodo purus ultrices. Donec at ligula gravida, cursus lorem et, iaculis enim. Sed vehicula urna at interdum blandit. Nulla vel orci ac nulla mattis rhoncus quis nec lectus. Etiam ullamcorper, eros id elementum iaculis, mauris elit tristique risus, a interdum odio est nec velit. Cras non odio nunc. Sed vel nisi eu sapien rutrum euismod quis vitae orci. Curabitur scelerisque neque orci, a vehicula justo molestie sed. Pellentesque eu felis venenatis, blandit lacus vel, dignissim odio. Nullam lobortis massa dapibus, dapibus urna a, tincidunt sem. Fusce aliquam mauris id tristique malesuada. Integer placerat quam lorem, ut pulvinar ante auctor id. Sed dignissim accumsan justo ut ultricies. Vivamus condimentum ante in suscipit euismod. Aenean porta ut velit vel mattis. 
        <hr/>
        </section>

        <CommentsForm onSend={this.handleSend} />
        <Comments items={comments} />
     </div>
     <aside className="sidecontent col-md-4">
      Etiam euismod turpis sed sapien pulvinar, id sagittis mauris sagittis. Cras scelerisque consectetur erat, sed rutrum nunc vestibulum et. Integer urna felis, dignissim non accumsan non, volutpat et nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vitae ultricies nulla, sit amet vestibulum leo. Mauris at lectus a purus imperdiet tristique. Nulla placerat lorem vitae tortor commodo feugiat. Nunc non tristique elit, eget cursus purus. In rutrum nunc eu ullamcorper vulputate. Vestibulum nec nibh et sem interdum ultrices eget sed urna. Quisque tristique pretium libero eu tincidunt. Fusce maximus dui a justo lacinia, ut elementum enim elementum. Phasellus vestibulum quam vel purus mollis, quis tempor felis interdum.    
     </aside>
    </div>
    )
  }
}