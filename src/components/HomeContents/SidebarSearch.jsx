import React, { Component } from "react";
import { Form,Card,Button} from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { FaSearch } from 'react-icons/fa';
class SidebarSearch extends Component {
    state = {
        value: [5000, 200000],
        step:5000,
        range: { min: 5000, max: 200000 },
        tooltips:[ true, true ],
      };


  render() {
    const { value,step,range,tooltips } = this.state;

const rangerValue = {
    fontSize:11,
    fontWeight:'bold',
  };
    return (
      <div>
          <Card className="bg-light shadow-lg">
              <Card.Header className="py-1 pb-0 text-center">
                <h3 >Search Rooms</h3>
              </Card.Header>
          <Card.Body> 
        <Form >
          <Form.Group >
            <Form.Label left>Name </Form.Label>
            <Form.Control className="rounded-0" size="sm" type="text" name="lodgingName" placeholder="Name of Hotel,Guest,etc."/>
          </Form.Group>
          <Form.Group className="border-bottom pb-1" >
            <Form.Label left>What Kind of lodging </Form.Label>
            <Form style={{fontSize:12}}>
              <Form.Check inline id="switch-hotel" type="switch" label="Hotel"/>
              <Form.Check inline id="switch-motel" type="switch" label="Motel"/>
              <Form.Check inline id="switch-guest" type="switch" label="Guest House" />
            </Form>
          </Form.Group>
          <Form.Group className="px-2 pb-2" >
            <Form.Label left>Price Range (MMK)</Form.Label>
            <Nouislider size="sm" 
            start={value} 
            step={step} 
            range={range} 
            clickablePips 
            connect 
            tooltips={tooltips}
            style={rangerValue} 
            />
          </Form.Group>
        <Form.Group>
            <Form.Label left>Region City</Form.Label>
            <Form.Control size="sm"  as="select" custom>
                <option value="1">Yangon</option>
                <option value="2">Mangalay</option>
            </Form.Control>
        </Form.Group>
        <Button variant="info" ariant="outline-info" className="float-right" size="sm" block>
            <b><FaSearch/> Search</b> 
        </Button>
        </Form>
        </Card.Body>
          </Card>
      </div>
    );
  }
}

export default SidebarSearch;
