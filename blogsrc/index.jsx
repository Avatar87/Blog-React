import './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import Header from './components/Header';
import Content from './components/Content';
<<<<<<< HEAD
import UserList from './containers/UserListContainer';
<<<<<<< HEAD
=======
import routes from './routes';
=======
>>>>>>> parent of d024491...   dd

>>>>>>> d7e17a5779fe3f8f2727ca6b7213922144e0334a

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
<<<<<<< HEAD
    <div>
=======
>>>>>>> parent of d024491...   dd
      <Fragment>
      <Header/>
        <BrowserRouter>
          <Switch>
            { routes.map((route, idx) => <Route key={idx} {...route} />) }
          </Switch>
        </BrowserRouter>
      </Fragment>
=======
      <div>
        <Header>
    
        </Header>
        <Content>

        </Content>
        <ModalExample>
        </ModalExample>
      </div>
<<<<<<< HEAD
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
=======

>>>>>>> d7e17a5779fe3f8f2727ca6b7213922144e0334a
>>>>>>> parent of d024491...   dd
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
