import '../index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default class Globalinfo extends Component {

  render () {

    return (
        <div className = "wrap">
          <div className="content1 col-lg-8">
            <h1 className = "mt-4">This Blog was designed by Avatarzzz</h1>
            <h2>All rights reserved</h2>
          </div>
        </div>
    )
  }
}