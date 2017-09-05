import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (

      <body>
      <div className="container">
             <div className="row justify-content-center">
             <nav>
             <ul className ="list-inline ">
      <li>
        <NavLink  activeClassName="selected" to="/">Home </NavLink>
      </li>
      <li>
        <NavLink  activeClassName="selected" to="/products"> Products</NavLink>
      </li>
      <li>
        <NavLink  activeClassName="selected" to="/about"> About</NavLink>
      </li>
      <li>
        <NavLink  activeClassName="selected" to="/Contact"> Contact</NavLink>
      </li>
            </ul>
            </nav>
    </div>
    </div>
        {this.props.children}

      </body>
    )
  }
}
