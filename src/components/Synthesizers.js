import React, { Component } from 'react';
import Minilogue from '../images/Minilogue.jpg';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import instruments from '../data/Instruments';

 class Synthesizers extends Component {

  render() {
    let Items = instruments.map(function (Item) {
      if (Item.Type === "Synthesizer") {
        return (

            <Col xs={6} md={4}>
                <Thumbnail src= {Minilogue} alt="242x200">
                <h3 className="Brand">{Item.Brand}</h3>
                <h5 className="Model">{Item.Model}</h5>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Buy Now</Button>&nbsp;
                    <Button bsStyle="default">Wish List</Button>
                  </p>
                </Thumbnail>
              </Col>
          )
        }
     });

    return (

      <div>

        <h1 className= "App">Synthesizers</h1>
          <Grid>
             <Row>

              {Items}

             </Row>
          </Grid>

      </div>
      );
    }
  }
  export default Synthesizers;
