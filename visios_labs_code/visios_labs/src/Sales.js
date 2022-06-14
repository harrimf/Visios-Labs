import React, { Component } from 'react';

import logo from './images/v2/visios_labs_logo.svg'
import {Navbar, Nav, Button, Container, Row, Col, Image, Accordion, Form} from 'react-bootstrap'
import { Link, Element } from 'react-scroll'
import { Link as RouterLink, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";

import './App.css';



class Sales extends Component {

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

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value.trim() })
  }

  sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an Error.', err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({submitPress: true})
    if(this.state.firstname !== "" && this.state.lastname !== "" && this.state.email !== "" && this.state.email.includes("@") && this.state.query !== "") {
      alert(`Thank you for filling in the form. We will get back to you soon`);
      const templateId = 'template_3e2hqyn';
      const serviceID = "service_fj4r3tt";
      this.sendFeedback(serviceID, templateId, { from_name: this.state.firstname.concat(" ", this.state.lastname), message: this.state.query, email: this.state.email })
      console.log(this.state.query);
      this.setState({submitted:  true});
    } else {
      console.log("Not all fields filled in")
    }

  };

  constructor(props) {
    super(props)
    this.state = {
      
      firstname: "",
      lastname: "",
      email: "",
      query: "",
      submitPress: false
    }

    console.log("Constructor called")

  }


render() {
  return (
    <div className="App">

      <div className="mainNavbar">
        <Container className="navContainer">
          <Row>
            <Col>
              <RouterLink to="/">
                <Image alt='Visios Labs logo' className="mainLogo" src={logo} />
              </RouterLink>
            </Col>
          </Row>
        </Container>
      </div>

      <Element id='contact' name='contact' className='contact section'>
        <Container>
          <Row className='headerRow'>
            <Col className='contactCol'>
              <h2 className='valueH2'>Contact Sales</h2>
              <p className='valueP'>Fill out the form, and we'll reach out as soon as possible! <br></br>Or email us at: sales@visioslabs.com.</p>

              <Form>
                <Form.Group className='contactForm' controlId="formBasicEmail">
                  <Form.Label className='contactLabel'>First name</Form.Label>
                  <Form.Control className="input" name="firstname" type="name" isInvalid={this.state.firstname === "" && this.state.submitPress} onChange={(e) => { this.handleFormChange(e)}}/>
                  <Form.Control.Feedback type='invalid'>
                      This field cannot be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='contactForm' controlId="formBasicEmail">
                  <Form.Label className='contactLabel'>Last name</Form.Label>
                  <Form.Control className="input" name="lastname" type="name" isInvalid={this.state.lastname === "" && this.state.submitPress} onChange={(e) => { this.handleFormChange(e)}}/>
                  <Form.Control.Feedback type='invalid'>
                      This field cannot be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='contactForm' controlId="formBasicEmail">
                  <Form.Label className='contactLabel'>Email address</Form.Label>
                  <Form.Control className="input" name="email" type="email" isInvalid={(this.state.email === "" || !this.state.email.includes("@")) && this.state.submitPress} onChange={(e) => { this.handleFormChange(e)}}/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.email === "" ? "This field cannot be empty" : "Please enter a valid email"}
                      
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='contactForm' controlId="formBasicEmail">
                    <Form.Label className='contactLabel'>Tell us about your request?</Form.Label>
                    <Form.Control className='input' name="query" as="textarea" rows={2} isInvalid ={this.state.query === "" && this.state.submitPress}onChange={(e) => { this.handleFormChange(e)}}/>
                    <Form.Control.Feedback type='invalid'>
                        This field cannot be empty
                    </Form.Control.Feedback>
                </Form.Group>

                
                <Row>
                  <Col className="contactForm">
                    {!this.state.submitted ? 
                    <button className="titleBtn" variant="primary" type="submit" size="lg" onClick={(e) => {this.handleSubmit(e); }}>
                      <span className="titleSpan">Submit</span> 
                    </button>
                    :
                    <RouterLink to="/" className='contactLink'>
                     Return
                    </RouterLink>
                    }
                  </Col>
                  {/* <Col>
                    <ReCAPTCHA className="captcha" sitekey="6Ld2VKofAAAAACTDV3SjzukLm_Yc7M5jYy6ChkWB" onChange={onChange}/>
                  </Col> */}
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Element>


    </div>
  );
}
}

export default Sales;
