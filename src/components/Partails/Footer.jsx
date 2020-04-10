import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div className="HeaderBackground text-white py-3">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="border-bottom">Help</h3>
                            <a href="#">FAQs</a>
                        </Col>
                        <Col>
                            <h3 className="border-bottom">Help</h3>
                            <a href="#">FAQs</a>
                        </Col>
                        <Col>
                            <h3 className="border-bottom">Help</h3>
                            <a href="#">FAQs</a>
                        </Col>
                        <Col>
                            <h3 className="border-bottom">Help</h3>
                            <a href="#">FAQs</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;