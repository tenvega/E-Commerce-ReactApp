import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import push from '../images/push.jpg';


 const Products = (props) => {

    return (
<div>
<h1>Products</h1>
<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {push} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Buy Now</Button>&nbsp;
          <Button bsStyle="default">Wish List</Button>
        </p>
      </Thumbnail>
    </Col>

    </Row>
  </Grid>


    </div>
    );
  }

export default Products;
