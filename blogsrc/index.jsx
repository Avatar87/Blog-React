import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import Header from './components/Header';
import Content from './components/Content';
import UserList from './containers/UserListContainer';
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

export class App extends Component {
  render () {
    return (
    <div>
      <Fragment>
      <Header/>
        <BrowserRouter>
          <Switch>
            { routes.map((route, idx) => <Route key={idx} {...route} />) }
          </Switch>
        </BrowserRouter>
      </Fragment>
        <ModalExample>
        </ModalExample>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
