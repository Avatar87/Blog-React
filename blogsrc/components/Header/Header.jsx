import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

import Menu from '../Menu';

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
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Login </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Enter your login and password</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
            <Label for="login">Login</Label>
            <Input placeholder="username" id = "login"/>
            <Label for="password">Password</Label>
            <Input type="password" id="password" placeholder="password" />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const menuItems = [
  { link: 'index.html', title: 'Home' },
  { link: 'blog.html', title: 'Blog' },
  { link: 'about.html', title: 'About Us' },
  { link: 'prices.html', title: 'Prices' },
  { link: 'contacts.html', title: 'Contacts' } 
]

export default class Header extends Component {
  static defaultProps = {
    size: 'maxi'
  }

  render () {
    const { size, children } = this.props;
    const headerClasses = classNames({
      header: true,
      'header--mini': size === 'mini',
      'header--maxi': size === 'maxi',
    })

    return (
      <div className={headerClasses}>
        <a href = "index.html"><img src="images/logo.png"></img></a>
        <Menu items={menuItems} />
        <ModalExample />
      </div>
    )
  }
}