import './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import Header from './components/Header';
import Content from './components/Content';
import UserList from './containers/UserListContainer';


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

class App extends Component {

  render () {
    return (
<<<<<<< HEAD
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
=======
      <div>
        <Header>
        </Header>
        <Content>
        </Content>
        <ModalExample>
        </ModalExample>
        <UserList>
        </UserList>
      </div>

>>>>>>> parent of 864e6ed... ff
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
