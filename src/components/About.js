import React, { Component } from 'react';
import {PageHeader, Col} from 'react-bootstrap'
import NYC from '../images/NYC.jpg';
export default class About extends Component {

  render() {
    return (

    <div className="container">

<PageHeader>About Gear Box <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small></PageHeader>


<h2>Locations</h2>
<h1>NYC</h1>
<ul className="list-inline">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
<h1>LA</h1>
<ul className="list-inline">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
<h1>Chicago</h1>
<ul className="list-inline">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>

   </div>
    );
  }
}
