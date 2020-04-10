import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import Home from './Home'
import MenuBar from './Partails/MenuBar';
import Footer from './Partails/Footer'
class Master extends Component {
    render() {
        return (
            <div>
                <MenuBar/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default Master;