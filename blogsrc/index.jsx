import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render () {
    return (
      <div>
        <Header>
    
        </Header>
        <Content>

        </Content>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));