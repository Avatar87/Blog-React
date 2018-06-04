import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import UserList from './containers/UserListContainer';
import UserListContainer from './containers/UserListContainer';

import routes from './routes';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
 

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

 

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>   
          <ModalBody>
          	Hello user!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  //componentDidMount() {this.toggle()}
}


export class Globalinfo extends Component {
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


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: ''
    };
  }

    toggle() {
    this.setState({
      info: <Globalinfo/>
    });
  }


  render () {
  const { info } = this.state;

    return (
      <Fragment>
        <Header size="maxi" />
        <BrowserRouter>
          <Switch>
            { routes.map((route, idx) => <Route key={idx} {...route} />) }
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
  componentDidMount() {this.toggle()}

}

ReactDOM.render(<App />, document.getElementById('root'));