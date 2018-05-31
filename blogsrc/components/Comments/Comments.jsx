import './Comments.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Comments extends PureComponent {
	
  static propTypes = {
  	items: PropTypes.arrayOf(
  	PropTypes.shape({
  		name: PropTypes.string.isRequired,
  		text: PropTypes.string.isRequired
  	})
  	)
  }	

  render () {
    const { items } = this.props;

    return (
      <div className = "media mb-4 commentwrap">
        {items.map((item, idx) => <div className = "media-body" key={idx}><h5>Commenter name: {item.name}</h5>{item.text}</div>)}
      </div>
    );
  } 
}