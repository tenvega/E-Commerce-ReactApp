import React, { Component } from 'react';
import Roland from '../images/Roland.jpg';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import instruments from '../data/Instruments';

 class DrumMachines extends Component {

  render() {
    let Items = instruments.map(function (Item) {
      if (Item.Type === "Drum Machine") {
        return (

            <Col xs={6} md={4}>
                <Thumbnail src= {Roland} alt="242x200">
                <h3 className="Brand">{Item.Brand}</h3>
                <h5 className="Model">{Item.Model}</h5>
                <h5 className="Model">{Item.price}</h5>
                  <p>{Item.Description}</p>
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

        <h1 className= "App">Drum Machines</h1>
          <Grid>
             <Row>

              {Items}

             </Row>
          </Grid>

      </div>
      );
    }
  }
  export default DrumMachines ;
