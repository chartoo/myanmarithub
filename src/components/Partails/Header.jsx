import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
  } from "react-bootstrap";
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa';
import '../../mystyles/home.css'
class Header extends Component {
    render() {
        return (
                 <section className="HeaderBackground py-1">
            <Container>
            <Row>
                <Col>
                    <Button href="//facebook.com" target="_black" variant="" className="p-0">
                        <FaFacebookSquare className="text-white mr-2" size={24} />
                    </Button>
                    <Button href="//twitter.c0m" target="_black" variant="" className="p-0">
                        <FaTwitterSquare className="text-white" size={24} />
                    </Button>
                </Col>
                <Col className="text-right">
                    <a href="mailto:dev.aungkyawhtwe@gmail.com" className="HeaderMail text-white ">dev.aungkyawhtwe@gmail.com</a>
                </Col>
            </Row>
            </Container>
            </section>
        );
    }
}

export default Header;