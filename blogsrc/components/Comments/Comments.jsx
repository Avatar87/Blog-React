import './Comments.scss';

import React, { PureComponent } from 'react';

export default class Comments extends PureComponent {
  render () {
    const { items } = this.props;

    return (
      <div className = "media mb-4 commentwrap">
        {items.map((item, idx) => <div className = "media-body" key={idx}><h5>Commenter name: {item.name}</h5>{item.text}</div>)}
      </div>
    );
  } 
}