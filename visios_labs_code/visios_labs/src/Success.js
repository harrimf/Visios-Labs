import React, { Component } from 'react';

import logo from './images/v2/visios_labs_logo.svg'
import {Navbar, Nav, Button, Container, Row, Col, Image, Accordion, Form} from 'react-bootstrap'
import { Link, Element } from 'react-scroll'
import { Link as RouterLink, useNavigate } from "react-router-dom";

import successImg from './images/v2/success_logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";

import './App.css';



class Success extends Component {

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav !== this.state.isMobile) {
        this.setState({isMobile: currentHideNav});
    }
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
  }


  constructor(props) {
    super(props)
    this.state = {
      
      
    }

    console.log("Constructor called")

  }


render() {
  return (
    <div className="App">

      {/* <div className="mainNavbar success">
        <Container className="navContainer success">
          <Row>
            <Col>
              <RouterLink to="/">
                <Image alt='Visios Labs logo' className="mainLogo" src={logo} />
              </RouterLink>
            </Col>
          </Row>
        </Container>
      </div> */}

      <Element id='success' name='success' className='success section'>
        <Container>
          <Row className='headerRow'>
            <Col className='contactCol'>
              <Image alt='NFT payment success' className="successImg" src={successImg} />
              <h2 className='valueH2'>Your payment was successfull</h2>
              <p className='successP'>Thank you for your payment. An automated email receipt will be sent to your email address.</p>
              <p className='successP'>We will contact you soon regarding your NFT collection.</p>
              <RouterLink to="/" className='successLink'>
                     Return home
              </RouterLink>                           
            </Col>
          </Row>
        </Container>
      </Element>


    </div>
  );
}
}

export default Success;
