import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import SidebarSearch from './HomeContents/SidebarSearch'
import SliderBanner from './HomeContents/SliderBanner'
class Home extends Component {
    render() {
        return (
            <div>
                <Container className="py-1 pb-3">
                  <Row>
                    <Col md={8} className="pt-1">
                      <SliderBanner/>
                    </Col>
                    <Col md={4} className="pt-1">
                      <SidebarSearch/>
                    </Col>
                  </Row>
                  <Row>
                    
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Home;