import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import Header from './Header';
class MenuBar extends Component {
  render() {
    return (
        <div>
        <Header/>
      <Navbar bg="light stricky-top py-3" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">MyLogoHere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          <Navbar.Collapse id="basic-navbar-nav" className="MenuBar">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="pl-4">Home</Nav.Link>
              <Nav.Link href="/near-rooms" className="pl-4">Near Rooms</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="pl-4">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about" className="pl-4">About Us</Nav.Link>
              <Nav.Link href="/contactus" className="pl-4">Contact Us</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
    
  }
}

export default MenuBar;
