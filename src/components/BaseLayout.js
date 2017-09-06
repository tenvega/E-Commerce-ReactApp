import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap'
export default class BaseLayout extends Component {
  render() {
    return (

      <body>

      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#">Gear Box</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><a href="#"><NavLink  activeClassName="selected" to="/">Home </NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/products"> Products</NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/about"> About</NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/Contact"> Contact</NavLink></a></NavItem>

      </Nav>
      <Nav pullRight>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        {this.props.children}

      </body>
    )
  }
}
