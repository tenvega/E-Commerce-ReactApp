import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import Instruments from '../data/Instruments.js';
import {NavLink} from 'react-router-dom';
import Minilogue from '../images/Minilogue.jpg';
import Roland from '../images/Roland.jpg';
import push from '../images/push.jpg';


 class Products extends Component {

  render() {
    return (
<div>
<h1>Products</h1>
<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
      <NavLink  activeClassName="selected" to="/synthesizers">
      <h3>Synthesizers</h3></NavLink>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Drum Machines</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Modular</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>

    </Row>
  </Grid>


    </div>
    );
  }

}
export default Products;
