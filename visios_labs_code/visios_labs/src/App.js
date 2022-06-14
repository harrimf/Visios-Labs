import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import logo from './images/v2/visios_labs_logo.svg'
import logoWhite from './images/v2/visios_labs_logo_white.svg'
import {Navbar, Nav, Button, Container, Row, Col, Image, Accordion, Form} from 'react-bootstrap'
import { Link, Element } from 'react-scroll'
import { Link as RouterLink} from "react-router-dom";
import NumberFormat from 'react-number-format';

import imgTitleArt from './images/v2/art_title_v2.svg'
import imgTitleCode from './images/v2/code_title_v2.svg'
import imgTitleUpload from './images/v2/deploy_title_v2.svg'
import imgTitleWebsite from './images/v2/website_title_v2.svg'
import imgTitleLaunch from './images/v2/launch_title_v2.svg'
import imgTitleDao from './images/v2/dao_title_v2.svg'



import imgTitleApe from './images/v2/ape_title.png'
import imgTitleMask from './images/v2/mask_title.png'
import imgTitlePet from './images/v2/pet_title.png'
import imgTitleMeka from './images/v2/meka_title.png'

import imgBrandYahoo from './images/v2/brand_yahoo.svg'
import imgBrandMarketWatch from './images/v2/brand_marketwatch.svg'
import imgBrandArtBasel from './images/v2/brand_art_basel.svg'
import imgBrandBenzinga from './images/v2/brand_benzinga.svg'
import imgBrandCoinMarketcap from './images/v2/brand_coinmarketcap.svg'
import imgBrandFox from './images/v2/brand_fox.svg'
import imgBrandMorningstar from './images/v2/brand_morningstar.svg'
import imgBrandNFTRadar from './images/v2/brand_nftradar.svg'

import imgBrandYahooBlack from './images/v2/brand_yahoo_black.svg'
import imgBrandFoxBlack from './images/v2/brand_fox_black.svg'
import imgBrandArtBaselBlack from './images/v2/brand_art_basel_black.svg'
import imgBrandNFTRadarBlack from './images/v2/brand_nftradar_black.svg'

import imgValuePick from './images/v2/pick_value.gif'
import imgValueCalendar from './images/v2/calendar_value.gif'
import imgValueRevise from './images/v2/revise_value.gif'

import imgValueCirclePurple from './images/v2/purple_circle_value.svg'
import imgValueCircleBlue from './images/v2/blue_circle_value.svg'



import imgValueQuote from './images/v2/quote_value.svg'

import imgApproachMatt from './images/v2/matt_approach.svg'

import imgServicesArt from './images/v2/art_services.gif'
import imgServicesCode from './images/v2/code_services.gif'
import imgServicesDao from './images/v2/dao_services.gif'
import imgServicesLaunch from './images/v2/launch_services.gif'
import imgServicesUpload from './images/v2/upload_services.gif'
import imgServicesWebsite from './images/v2/website_services.gif'

import imgServicesIcon1 from './images/v2/purple_icon_services.svg'
import imgServicesIcon2 from './images/v2/yellow_icon_services.svg'
import imgServicesIcon3 from './images/v2/blue_icon_services.svg'
import imgServicesIcon4 from './images/v2/orange_icon_services.svg'



import imgProjectsMask1 from './images/v2/mask_1_lgs.svg'
import imgProjectsMask2 from './images/v2/mask_2_lgs.svg'
import imgProjectsMask3 from './images/v2/mask_3_lgs.svg'
import imgProjectsMask4 from './images/v2/mask_4_lgs.svg'
import imgProjectsMask5 from './images/v2/mask_5_lgs.svg'
import imgProjectsMask6 from './images/v2/mask_6_lgs.svg'
import imgProjectsMask7 from './images/v2/mask_7_lgs.svg'
import imgProjectsMask8 from './images/v2/mask_8_lgs.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";

import './App.css';

const stripePromise = loadStripe('pk_test_51L6WpqFk7v1VdnPeVY4BdOMjFqmcdjrydNW88NzWTCQykAYxsKcMnN4ugiLweTriWAPOJXPcmYuT73OX42OXT3CR00DVQQSBtr')


class App extends Component {

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

  handleOrder = async (e) => {
    e.preventDefault()

    // const artworkId = "price_1L7JrRFk7v1VdnPe7CAyzBQn"
    // const codeId = "price_1L7JsQFk7v1VdnPe62k2KsK5"
    // const deployId = "price_1L7Jt8Fk7v1VdnPeLe5DGttI"
    // const websiteId = "price_1L7JtwFk7v1VdnPe0NS12BWY"
    // const supportId = "price_1L7JuTFk7v1VdnPex3XfbCdi"
    // const daoId = "price_1L7JurFk7v1VdnPevx55W8Cb"

    // var services = []


    // if(this.state.artworkBool) {
    //   const service = {
    //     price: artworkId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

    // if(this.state.codeBool) {
    //   const service = {
    //     price: codeId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

    // if(this.state.deployBool) {
    //   const service = {
    //     price: deployId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

    // if(this.state.websiteBool) {
    //   const service = {
    //     price: websiteId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

    // if(this.state.supportBool) {
    //   const service = {
    //     price: supportId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

    // if(this.state.daoBool) {
    //   const service = {
    //     price: daoId,
    //     quantity: 1,
    //   };
    //   services.push(service)
    // }

  const philosopherBool = true
  const sahelanthropusBool = true
  const rexBool = true

  const philosopherId = "price_1L7JBjFk7v1VdnPeP6PA8mEx"
  const sahelanthropusId = "price_1L80qvFk7v1VdnPefyMYJMW4"
  const rexId = "price_1L80q4Fk7v1VdnPeFdxZny7H"

  var services = []


  if(philosopherBool) {
    const service = {
      price: philosopherId,
      quantity: 1,
    };
    services.push(service)
  }

  if(sahelanthropusBool) {
    const service = {
      price: sahelanthropusId,
      quantity: 1,
    };
    services.push(service)
  }

  if(rexBool) {
    const service = {
      price: rexId,
      quantity: 1,
    };
    services.push(service)
  }

  console.log(services)


    if(services.length > 0) {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: services,
        mode: 'payment',
        successUrl: 'https://visioslabs.com/success',
        cancelUrl: 'https://visioslabs.com',
      });

      
    }
   

  };


  handleSelect = (e) => {
    e.preventDefault()

    switch(e.target.name) {
      case 'artwork':
        this.setState(prevState => (
          {artworkBool: !prevState.artworkBool}));
        break;
      case 'code':
        this.setState(prevState => ({
          codeBool: !prevState.codeBool
        }));
        break;
      case 'deploy':
        this.setState(prevState => ({
          deployBool: !prevState.deployBool
        }));
        break;
      case 'website':
        this.setState(prevState => ({
          websiteBool: !prevState.websiteBool
        }));        
        break;
      case 'support':
        this.setState(prevState => ({
          supportBool: !prevState.supportBool
        }));   
        break;
      case 'dao':
        this.setState(prevState => ({
          daoBool: !prevState.daoBool
        }));   
        break;
      default:
        break;
    }
  };

  calcPrice = () => {

    var price = 0
    price += this.state.artworkBool ? this.state.artworkPrice : 0
    price += this.state.codeBool ? this.state.codePrice : 0
    price += this.state.deployBool ? this.state.deployPrice : 0
    price += this.state.websiteBool ? this.state.websitePrice : 0
    price += this.state.supportBool ? this.state.supportPrice : 0
    price += this.state.daoBool ? this.state.daoPrice : 0

    return price

  }

  constructor(props) {
    super(props)
    this.state = {
      artworkBool: false,
      codeBool: false,
      deployBool: false,
      websiteBool: false,
      supportBool: false,
      daoBool: false,
      artworkPrice: 2995,
      codePrice: 2995,
      deployPrice: 995,
      websitePrice: 2995,
      supportPrice: 995,
      daoPrice: 6995,
      finalPrice: 0
    }

    console.log("Constructor called")

  }


render() {
  return (
    <div className="App">

      <div className="mainNavbarAlt">
        <Container className="navContainerAlt">
          <Row>
            <Col>
              <Image alt='Visios Labs logo' className="mainLogoAlt" src={logo} />
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg navbar">
        <Container className='mainNavbar'>
          <Navbar.Brand href="#home">
          <Image
              alt="visios labs logo"
              src={logo}
              className="mainLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link >
                <Link to="value" className='nav-scrolllink'>Benefits</Link> 
              </Nav.Link>   
              
              <Nav.Link>
                <Link to="services" className='nav-scrolllink'>Services</Link>
              </Nav.Link> 

              <Nav.Link> 
                <Link to="pricing" className='nav-scrolllink'>Pricing</Link>
              </Nav.Link>

              <Nav.Link>   
                <Link to="faq" className='nav-scrolllink'>FAQ</Link>
              </Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Element id='start' name='start'>
        <Container className='sectionContainer'>
          <Row>
            <Col className='mainCol thinCol'>
              <h1 className='startH1'>The artistic vision emerges in the NFT space</h1>
              <p className='welcomeParagraph'>You create the art. We do the rest.</p>
              <p className='welcomeParagraph'>Visios Labs helps artists & creators launch their NFT collections. We handle the tech so you can focus on the art & community.</p>
              <div className='startDiv'>
                <Row>
                  <Col>
                  <h2 className='subTitleH2'>Ready to jump into the NFT space? We're here to help.</h2>
                  <Link to="get_started" className='nav-scrolllink'>
                    <Button className="startBtn" variant="primary" size="lg">
                      <span className="startSpan">Get started</span> 
                    </Button>
                  </Link> 
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className='centerCol'>
              <Image alt='A new dawn in NFT' className="startImage" src={imgStartGraphic} />
            </Col>
          </Row>
        </Container>
      </Element> */}

      <Element id='title' name='title' className='title section'>
        <Container>
          <Row>
            <Col className='titleImgCol'>
              <Row>              
                <Image alt='NFT artwork creation' className="titleServiceImg" src={imgTitleArt} />
              </Row>
              <Row>              
                <Image alt='Coding NFT smart contracts' className="titleServiceImg" src={imgTitleCode} />
              </Row>
              <Row>              
                <Image alt='Uploading NFT assets' className="titleServiceImg" src={imgTitleUpload} />
              </Row>
            </Col>

            <Col className="titleCol">
              <h1 className='titleH1'>The world's first NFT agency</h1>
              <p className='titleP'>We build an NFT collection. <b>You own it.</b></p>
              <Link to="pricing" className='nav-scrolllink'>
                <button className="titleBtn" variant="primary" size="lg">
                  <span className="titleSpan">Get started</span> 
                </button>
              </Link> 
            </Col>

            <Col className='titleImgCol'>
              <Row>              
                <Image alt='NFT minting website creation' className="titleServiceImg" src={imgTitleWebsite} />
              </Row>
              <Row>              
                <Image alt='NFT drop launch support' className="titleServiceImg" src={imgTitleLaunch} />
              </Row>
              <Row>              
                <Image alt='NFT DAO creation' className="titleServiceImg" src={imgTitleDao} />
              </Row>
            </Col>
          </Row>

          <Row className="titleNFTRow">
            <Col>
              <Image alt='NFT Ape' className="titleNFTImg" src={imgTitleApe} />
            </Col>
            <Col>
              <Image alt='NFT Mask' className="titleNFTImg" src={imgTitleMask} />
            </Col>
            <Col>
              <Image alt='NFT Pet' className="titleNFTImg" src={imgTitlePet} />
            </Col>
            <Col>
              <Image alt='NFT Meka' className="titleNFTImg" src={imgTitleMeka} />
            </Col>
          </Row>

        </Container>
      </Element>

      <Element id='brand' name='brand' className='brand'>
          <Row className='brandRow'>
          
            <Col>
              <Image alt='Yahoo Visios Labs NFT' className="brandImg" src={imgBrandYahoo} />
            </Col>
            <Col>
              <Image alt='Fox Visios Labs NFT' className="brandImg" src={imgBrandFox} />
            </Col>
            <Col>
              <Image alt='Art Basel Visios Labs NFT' className="brandImg" src={imgBrandArtBasel} />
            </Col>
            <Col>
              <Image alt='Benzinga Visios Labs NFT' className="brandImg" src={imgBrandBenzinga} />
            </Col>
            <Col>
              <Image alt='MorningStar Visios Labs NFT' className="brandImg" src={imgBrandMorningstar} />
            </Col>
            <Col>
              <Image alt='CoinMarketcap Visios Labs NFT' className="brandImg" src={imgBrandCoinMarketcap} />
            </Col>
            <Col>
              <Image alt='NFTRadar Visios Labs NFT' className="brandImg" src={imgBrandNFTRadar} />
            </Col>
            <Col>
              <Image alt='MarketWatch Visios Labs NFT' className="brandImg" src={imgBrandMarketWatch} />
            </Col>
          </Row>
      </Element>

      <Element id='value' name='value' className='value section'>
        <Container>

          <Row className='headerRow'>
          {/* <Col className='valueImgCol1'>
            <Row>              
              <Image alt='Visios Labs NFT' className="valueImg" src={imgValueCircleBlue} />
            </Row>
          </Col> */}

            <Col  className='valueCol'>
              <h2 className='valueH2'>We didn't reinvent the wheel. Just NFT's.</h2>
              <p className='valueP'>Don't worry about the tech.<br></br> <b>Top-tier NFT collections</b> built for you.</p>
            </Col>

            {/* <Col className='valueImgCol2'>
              <Row>              
                <Image alt='Visios Labs NFT' className="valueImg" src={imgValueCirclePurple} />
              </Row>
            </Col> */}

          </Row>

          <Row className='valueSrvRow'>
            <Col className='valueSrvCol'>
              <Image alt='Choose NFT services' className="valueGif" src={imgValuePick} />
              <p className='valueSrvP'>Pick the NFT services that you want.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='NFT collection ready within weeks' className="valueGif" src={imgValueCalendar}/>
              <p className='valueSrvP'>Have your NFT's ready within 1-2 weeks.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='Revise NFT collection untill you are happy' className="valueGif" src={imgValueRevise} />
              <p className='valueSrvP'>We'll revise the NFT's until you are 100% satisfied.</p>
            </Col>
          </Row>
            

          <Row className='valueQuoteRow'>
            <Col className='valueQuoteCol'>
              <Image alt='NFT quote' className="quoteImg" src={imgValueQuote} />
              <h3 className='valueH3 quote'>Visios Labs masterfully fuses art and technology.</h3>
              <Image alt='Art Basel Visios Labs NFT' className="brandImg quoteBrand" src={imgBrandArtBaselBlack} />
            </Col>
          </Row>
        </Container>
      </Element>

      <Element id='approach' name='approach' className='approach section'>
        <Container>
          <Row className='headerRow'>
            <Col className='approachCol'>
              <h2 className='valueH2'>The NFT collection you want.<br></br> Without the effort.</h2>
              <p className='valueP'>Visios Labs replaces unreliable freelancers and restrictive tools for a flat service-based fee. <b>Reap the benefits</b> from your premium NFT collection.</p>
            </Col>
          </Row>

          <Row className='approachRow'>
            <Col className='approachQuoteCol'>
              <div className='approachQuoteDiv' >
                <Image alt='NFT quote' className="quoteImg" src={imgValueQuote} />
                <h3 className='approachH3 quote'>NFT's are the future, and these guys are building it.</h3>
                <div class="approachMattDiv"> 
                    <Image alt='Visios Labs recommendation' className="mattImg" src={imgApproachMatt} /> 
                    <span className='mattSpan'>Matt Popovic, ⚡BlockSpark</span>
                </div>
              </div>
            </Col>
            <Col className='approachListCol'>
                <h3 className='approachH3'>Tech is on us</h3>
                <p className='approachP'>We'll write code, create art, build a website, and deploy assets for your NFT collection.</p>
                <h3 className='approachH3'>Manage with Trello</h3>
                <p className='approachP'>Manage your NFT collection using Trello. View active, queued and completed tasks with ease.</p>
                <h3 className='approachH3' >You own the NFT collection</h3>
                <p className='approachP' >We build it. You own it. You get 100% of the revenue from your NFT collection. </p>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element id='services' name='services' className='services section'>
        <Container>
          <Row className='headerRow'>

            <Col className='servicesImgCol'>
              <Row>              
                <Image alt='Visios Labs NFT' className="servicesImg" src={imgServicesIcon1} />
              </Row>
              <Row>              
                <Image alt='Visios Labs NFT' className="servicesImg" src={imgServicesIcon2} />
              </Row>
            </Col>

            <Col  className='servicesCol'>
              <h2 className='valueH2'>Our services</h2>
              <p className='valueP'>Amazing NFT services. A flat fee per service.<br></br> No hourly rates or hidden costs.</p>
              <Link to="pricing" className='nav-scrolllink'>
                <button className="titleBtn" variant="primary" size="lg">
                  <span className="titleSpan">Get started</span> 
                </button>
              </Link>
            </Col>

            <Col className='servicesImgCol'>
              <Row>              
                <Image alt='Visios Labs NFT' className="servicesImg" src={imgServicesIcon3} />
              </Row>
              <Row>              
                <Image alt='Visios Labs NFT' className="servicesImg" src={imgServicesIcon4} />
              </Row>
            </Col>
          </Row>

          <Row className='valueSrvRow'>
            <Col className='valueSrvCol'>
              <Image alt='Choose NFT services' className="valueGif" src={imgServicesArt} />
              <h3 className='servicesH3'>Artwork</h3>
              <p className='servicesP'>Beautiful NFT art based on your ideas.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='NFT collection ready within weeks' className="valueGif" src={imgServicesCode}/>
              <h3 className='servicesH3'>NFT code</h3>
              <p className='servicesP'>Your NFT collection coded up as smart contract.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='Revise NFT collection untill you are happy' className="valueGif" src={imgServicesUpload} />
              <h3 className='servicesH3'>NFT deploy</h3>
              <p className='servicesP'>All your NFT assets will be put on the Blockchain.</p>
            </Col>
          </Row>

          <Row className='valueSrvRow'>
            <Col className='valueSrvCol'>
              <Image alt='Choose NFT services' className="valueGif" src={imgServicesWebsite} />
              <h3 className='servicesH3'>Website</h3>
              <p className='servicesP'>A website to highlight your collection, with direct NFT purchases.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='NFT collection ready within weeks' className="valueGif" src={imgServicesLaunch}/>
              <h3 className='servicesH3'>Launch support</h3>
              <p className='servicesP'>Ensure your launch runs smoothly.</p>
            </Col>
            <Col className='valueSrvCol'>
              <Image alt='Revise NFT collection untill you are happy' className="valueGif" src={imgServicesDao} />
              <h3 className='servicesH3'>DAO</h3>
              <p className='servicesP'>Let NFT buyers govern with a Decentralized Autonomous Organization (DAO).</p>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element id='projects' name='projects' className='projects section'>
        <Container>
          <Row className='headerRow'>
            <Col className='projectsCol'>
              <h2 className='valueH2 white'>Built by us.</h2>
            </Col>
          </Row> 

          <a href="https://masksofether.com" target={"_blank"} rel="noreferrer" className='projectsA'>
          <Row className='projectsRow'>
            <Col className='projectsMOECol'>
              <h3 className='projectsH3 white'>Masks of Ether</h3>
              <p className='projectsP white'>A collection of generative masks inspired by West-African tribal art. Aiming to share rich African culture in the NFT space.</p>
              <Row className='projectsLogoRow1'>
                <Col>
                  <Image alt='Art Basel Visios Labs NFT' className="projectsBrandImg" src={imgBrandArtBasel} />
                </Col>
                <Col>
                  <Image alt='Yahoo Visios Labs NFT' className="projectsBrandImg" src={imgBrandYahoo} />
                </Col>
                <Col>
                  <Image alt='Fox Visios Labs NFT' className="projectsBrandImg" src={imgBrandFox} />
                </Col>
                <Col>
                  <Image alt='NFT Radar Visios Labs NFT' className="projectsBrandImg" src={imgBrandNFTRadar} />
                </Col>
              </Row>
            </Col>
            <Col className='projectsNftImgCol'>
              <Row>
                <Col>
                  <Image alt='Visios Labs and Masks of Ether NFT 1' className="projectsIcon" src={imgProjectsMask3} />
                </Col>
                <Col>
                  <Image alt='Visios Labs and Masks of Ether NFT 2' className="projectsIcon" src={imgProjectsMask4} />
                </Col>
              </Row>

              <Row className='projectsLogoRow2'>
                <Col>
                  <Image alt='Art Basel Visios Labs NFT' className="projectsBrandImg" src={imgBrandArtBasel} />
                </Col>
                <Col>
                  <Image alt='Yahoo Visios Labs NFT' className="projectsBrandImg" src={imgBrandYahoo} />
                </Col>
                <Col>
                  <Image alt='Fox Visios Labs NFT' className="projectsBrandImg" src={imgBrandFox} />
                </Col>
                <Col>
                  <Image alt='NFT Radar Visios Labs NFT' className="projectsBrandImg" src={imgBrandNFTRadar} />
                </Col>
              </Row>

            </Col>
          </Row> 
          </a>
        </Container>
      </Element>

      <Element id='pricing' name='pricing' className='pricing section'>
        <Container>
          <Row className='headerRow'>
            <Col className='pricingMainCol'>
              <h2 className='valueH2'>Let's keep it simple</h2>
              <p className='valueP'>Pick the services that are right for you.</p>
            </Col>
          </Row>

          <Row className='pricingRow'>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>Artwork</h3>
              <p className='pricingP'>Beautiful art for your NFT collection.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.artworkPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• Unique and custom art<br></br>• 2D or 3D art<br></br>• Created with your input</p>
              </Row>
              <Row>
                
              <button className={this.state.artworkBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='artwork' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e); }}>
                  {this.state.artworkBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol'>
            <Row>
              <h3 className='pricingH3'>NFT code</h3>
              <p className='pricingP'>Your NFT's as smart contract code.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.codePrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• Unlimited NFT's<br></br>• Secure and audited code<br></br>• Traditional or fractional NFT's</p>
              </Row>
              <Row>
              <button className={this.state.codeBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='code' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e); }}>
                {this.state.codeBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>NFT deploy</h3>
              <p className='pricingP'>Your NFT's deployed on the blockchain.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.deployPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• Deploy on a popular Blockchain<br></br>• Assets are decentralized<br></br>• We pay transaction fees</p>
              </Row>
              <Row>
              <button className={this.state.deployBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='deploy' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e);  }}>
                {this.state.deployBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol yourServices pricingOrder1'>
              <Row>
              <h3 className='pricingH3'>Your services:</h3>
              <p className='pricingListP'>{this.state.artworkBool ? <div>• Artwork <br></br></div> : ''}{this.state.codeBool ? <div>• NFT code <br></br></div> : ''}{this.state.deployBool ? <div>• NFT deploy <br></br></div> : ''}{this.state.websiteBool ? <div>• Website <br></br></div> : ''}{this.state.supportBool ? <div>• Launch support <br></br></div> : ''}{this.state.daoBool ? <div>• DAO <br></br></div> : ''}</p>
              </Row>
              <Row>
              <hr className="pricingHr"></hr>
              <span className='pricingtotalSpan'>Total:</span>
              <h3 className='pricingFinalH3'>
                <NumberFormat value={this.calcPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>

              <button className="pricingOrderBtn" role="link" name='order' variant="primary" size="lg" onClick={(e) => {this.handleOrder(e); }}>
                    Checkout
              </button>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>Website</h3>
              <p className='pricingP'>Website to highlight your NFT's.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.websitePrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• Allows for NFT purchases<br></br>• Published on custom domain<br></br>• High quality design</p>
              </Row>
              <Row>
              <button className={this.state.websiteBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='website' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e); }}>
                {this.state.websiteBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>Launch support</h3>
              <p className='pricingP'>Guidance through your NFT launch.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.supportPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• Direct chat support<br></br>• Launch strategies<br></br>• Advice on 3rd party services</p>
              </Row>
              <Row>
              <button className={this.state.supportBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='support' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e); }}>
                {this.state.supportBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>DAO</h3>
              <p className='pricingP'>Let your NFT buyers govern with a DAO.</p>
              <h3 className='pricingPriceH3'>
                <NumberFormat value={this.state.daoPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>
              <hr className="pricingHr"></hr>
              <p className='pricingExtraP'><b>What's included:</b> <br></br>• NFT holders can vote<br></br>• Introduce proposals to improve project</p>
              </Row>
              <Row>
              <button className={this.state.daoBool ? 'pricingBtn pricingBtnClicked': 'pricingBtn'} name='dao' variant="primary" size="lg" onClick={(e) => {this.handleSelect(e); }}>
                {this.state.daoBool ? 'Selected': 'Select service'}
              </button>
              </Row>
            </Col>
            <Col className='pricingCol yourServices pricingOrder2'>
              <Row>
              <h3 className='pricingH3'>Your Services:</h3>
              <p className='pricingListP'>{this.state.artworkBool ? <div>• Artwork <br></br></div> : ''}{this.state.codeBool ? <div>• NFT code <br></br></div> : ''}{this.state.deployBool ? <div>• NFT deploy <br></br></div> : ''}{this.state.websiteBool ? <div>• Website <br></br></div> : ''}{this.state.supportBool ? <div>• Launch support <br></br></div> : ''}{this.state.daoBool ? <div>• DAO <br></br></div> : ''}</p>
              </Row>
              <Row>
              <hr className="pricingHr"></hr>
              <span className='pricingtotalSpan'>Total:</span>
              <h3 className='pricingFinalH3'>
                <NumberFormat value={this.calcPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </h3>

              <button className="pricingOrderBtn" role="link" name='order' variant="primary" size="lg" onClick={(e) => {this.handleOrder(e); }}>
                    Checkout
              </button>
              </Row>
            </Col>
            <Col className='pricingCol'>
              <Row>
              <h3 className='pricingH3'>Questions?</h3>
              <p className='pricingP'>Anything you want to know about our services?</p>
              <RouterLink className='pricingLink' to="/contact">Contact us</RouterLink>
              </Row>
              <Row>
              <h3 className='pricingH3 marginH3'>Special requests?</h3>
              <p className='pricingP'>Contact our sales team and we'll look at getting you started in the NFT space.</p>
              <RouterLink className='pricingLink' to="/sales">Contact sales</RouterLink>
              </Row>

            </Col>
          </Row>
        </Container>
      </Element>

      <Element id='faq' name='faq' className='faq section'>
        <Container>
          <Row className='headerRow'>
            <Col className='faqCol'>
              <h2 className='valueH2'>FAQ</h2>
            </Col>
          </Row>
          <Row className='faqRow'>
            <Col>
              <Accordion className='faqAccordion'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><span className='faqHeader'>What are NFTs?</span></Accordion.Header>
                  <Accordion.Body >
                  <span className='faqBody'>NFT's are an exciting new technology that allows for true ownership of digital assets. We can now own provably own things like digital art, sports cards, games, music, videos and more.</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><span className='faqHeader'>Why would I want an NFT collection?</span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>Creating an NFT collection is a great way to sell your digital assets and create a 
community centred around your digital creations. You can earn significant revenue from digitizing your work as an NFT collection.</span>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header><span className='faqHeader'>Why wouldn't I just hire a full-time developer?</span></Accordion.Header>
                  <Accordion.Body >
                  <span className='faqBody'>The annual costs of a full-time senior-level Blockchain Engineer now exceeds $200,000,
plus benefits (and good luck finding one available). You may not have enough work to
keep them busy at all times, so you'll end up paying for unused time.
<br></br>
With our service model you'll pay a flat fee and only
pay for the services that you want.</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><span className='faqHeader'>How fast will my NFT collection be built?</span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>On average NFT collections are built within 1-2 weeks but depending on the services
selected and the complexity of the request it might take longer.</span>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header><span className='faqHeader'>What size can my NFT collection be?</span></Accordion.Header>
                  <Accordion.Body >
                  <span className='faqBody'>Your collection can be any size. You can make it as big as you want!</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header><span className='faqHeader'>Do I keep the revenue from my NFT sales?</span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>Yes! You keep 100% of the revenue of the NFT sales. We build the NFT collection and you own it.</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header><span className='faqHeader'>How do I make requests for my NFT collection?</span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>We offer a lot of flexibility in how you share your requests. Clients typically share what
they want as a Google docs, a Wireframe or even a video. Basically if you can share it
in Trello it is fine. Alternatively you can email us with requests at: contact@visioslabs.com.</span>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header><span className='faqHeader'>What if I don't like my NFT collection?</span></Accordion.Header>
                  <Accordion.Body >
                  <span className='faqBody'>No worries! We will continue to make revisions until you are 100% satisfied.</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header><span className='faqHeader'>Are there any other fees? Do I pay gas fees?</span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>We cover all fees. So you won't have to pay gas fees.</span>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header><span className='faqHeader'>Are there any refunds if I don't like the services? </span></Accordion.Header>
                  <Accordion.Body>
                  <span className='faqBody'>Due to the high quality nature of the work there wont be any refunds issued.</span>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          </Container>
      </Element>

      <Element id='getStarted' name='getStarted' className='getStarted section'>
        <Container>
          <Row className='headerRow'>
            <Col className='getStartedCol'>
              <h2 className='valueH2 white'>Ready to jump into the NFT space?</h2>
              <p className='valueP white'>Check out our services, and find out how you can leave your mark in the NFT space.</p>
              <Link to="pricing" className='nav-scrolllink'>
                <button className="getStartedBtn" >
                  Get started
                </button>
              </Link>
            </Col>
          </Row>
          <Row className='getStartedBrandRow'>
            <Col>
              <Image alt='Yahoo Visios Labs NFT' className="brandImg" src={imgBrandYahoo} />
            </Col>
            <Col>
              <Image alt='Fox Visios Labs NFT' className="brandImg" src={imgBrandFox} />
            </Col>
            <Col>
              <Image alt='Art Basel Visios Labs NFT' className="brandImg" src={imgBrandArtBasel} />
            </Col>
            <Col>
              <Image alt='Benzinga Visios Labs NFT' className="brandImg" src={imgBrandBenzinga} />
            </Col>
            <Col>
              <Image alt='MorningStar Visios Labs NFT' className="brandImg" src={imgBrandMorningstar} />
            </Col>
            <Col>
              <Image alt='CoinMarketcap Visios Labs NFT' className="brandImg" src={imgBrandCoinMarketcap} />
            </Col>
            <Col>
              <Image alt='NFTRadar Visios Labs NFT' className="brandImg" src={imgBrandNFTRadar} />
            </Col>
            <Col>
              <Image alt='MarketWatch Visios Labs NFT' className="brandImg" src={imgBrandMarketWatch} />
            </Col>
          </Row>
        </Container>
      </Element>


      <footer className='footer'>
          <Container>
            <Row>
              <Col className='footerLeftCol' >
                <Image alt='visios labs logo' src={logoWhite} className='footerImage'/>
              </Col>
            

              <Col className="footerRightCol">
                <Row> <p className="copyrightText white">Copyright © Visios Labs</p></Row>
              </Col>
            </Row>
          </Container>
          
        </footer>   
    </div>
  );
}
}

export default App;
