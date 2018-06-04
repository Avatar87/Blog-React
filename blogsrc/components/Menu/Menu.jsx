import './Menu.css';
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {
  static defaultProps = {
    items: []
  }

  render () {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => <NavItem>{item.link}</NavItem>)}
      </ul>
    )
  }
}