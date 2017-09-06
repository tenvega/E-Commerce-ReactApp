import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button, PageHeader} from 'react-bootstrap'
import Instruments from '../data/Instruments.js';
import {NavLink} from 'react-router-dom';
import Minilogue from '../images/Minilogue.jpg';
import Roland from '../images/Roland.jpg';
import unnamed from '../images/unnamed.jpg';
import IMG from '../images/IMG.jpg';
import BG from '../images/BG.jpg';


 class Products extends Component {

  render() {
    return (
<div className="container">

<h1 className ="App">Products</h1>

<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src= {BG} alt="242x200">
      <NavLink  activeClassName="selected" to="/synthesizers">
      <h3>Synthesizers</h3></NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,    sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {unnamed} alt="242x200">
      <NavLink  activeClassName="selected" to="/drummachines">
      <h3>Drum Machines</h3></NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,    sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {IMG} alt="242x200">
      <NavLink  activeClassName="selected" to="/modular">
        <h3>Modular</h3></NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,    sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Thumbnail>
    </Col>

    </Row>
  </Grid>


    </div>
    );
  }

}
export default Products;
