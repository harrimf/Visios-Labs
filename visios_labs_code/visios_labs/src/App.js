import logo from './images/logo_visios.svg'
import {Navbar, Nav, Button, Container, Row, Col, Image, Form} from 'react-bootstrap'
import { Link, Element } from 'react-scroll'

import imgStart_1 from './images/star_square.svg'
import imgStart_2 from './images/triangle_square.svg'
import imgStart_3 from './images/clip_square.svg'
import imgStart_4 from './images/circle_square.svg'

import imgStartGraphic from './images/graphic_start.svg'

import imgCollection from './images/nft_list_alt_2.svg'

import imgTech from './images/tech_icon.svg'
import imgGuidance from './images/guidance_icon.svg'
import imgOwnership from './images/ownership_icon.svg'

import imgApproach from './images/approach_graphic.svg'

import imgSub_1 from './images/icon_star_blue.svg'
import imgSub_2 from './images/icon_clip_orange.svg'
import imgSub_3 from './images/icon_diamond_purple.svg'
import imgSub_4 from './images/icon_circle_magenta.svg'
import imgSub_5 from './images/icon_clip_magenta.svg'
import imgSub_6 from './images/icon_star_orange.svg'
import imgSub_7 from './images/icon_diamond_blue.svg'
import imgSub_8 from './images/icon_circle_purple.svg'
import imgSub_9 from './images/icon_star_magenta.svg'
import imgSub_10 from './images/icon_circle_orange.svg'


import imgNews from './images/news_side_image.svg'

import imgSmartContract from './images/smart_contract_icon_alt.svg'
import imgAsset from './images/asset_icon_alt.svg'
import imgArtwork from './images/artwork_icon_alt.svg'
import imgWebsite from './images/website_icon_alt.svg'
import imgSupport from './images/support_icon_alt.svg'

import imgBarRed from './images/stat_bar_red.svg'
import imgBarPurple from './images/stat_bar_purple.svg'
import imgFeatured_1 from './images/moe_banner.svg'
import imgStat_1 from './images/stat_1_image.svg'
import imgStat_2 from './images/stat_2_image.svg'

import imgRocket from './images/success_rocket.svg'



import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar>
          <Container className='mainNavbar'>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={logo}
                width="45"
                height="45"
                className="d-inline-block align-top "/>{' '} <span className="nav-main">Visios Labs</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link >
                  <Link to="vision" className='nav-scrolllink'>Vision</Link> 
                </Nav.Link>   
                
                <Nav.Link>
                  <Link to="approach" className='nav-scrolllink'>Approach</Link>
                </Nav.Link> 

                <Nav.Link> 
                  <Link to="approach" className='nav-scrolllink'>Projects</Link>
                </Nav.Link>

                <Nav.Link>   
                  <Link to="get_started" className='nav-scrolllink'>Get Started</Link>
                </Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <Container className='contentContainer'>
      <Element id='start' name='start'>
        <Container className='sectionContainer'>
            <Row>
              <Col className='mainCol'>
                <h1 className='welcome'>The artistic vision emerges in the NFT space</h1>
                <p className='welcomeParagraph'>You create the art. We do the rest.</p>
                <p className='welcomeParagraph' style={{maxWidth:"500px",}}>Visios Labs helps artists & creators launch their NFT collections. We handle the tech so you can focus on the art & community.</p>
                <div style={{maxWidth:"500px", backgroundColor: "#ffffff", marginTop: "36px", padding: "20px",  border:"1px solid #C1C8E4", borderRadius: "25px"}}>
                  <Row>
                    <Col>
                    <h2 className='subTitleH2'>Ready to jump into the NFT space? We're here to help.</h2>
                    <Link to="get_started" className='nav-scrolllink'>
                      <Button style={{marginTop: "24px"}} className="startBtn" variant="primary" size="lg">
                        <span className="startSpan">Get started</span> 
                      </Button>
                    </Link> 
                    </Col>
                  </Row>
                </div>


              </Col>
              <Col style={{textAlign: "center"}}>
              <Image className="startImage" src={imgStartGraphic} />

                {/* <Row>
                  <Col>
                  <Image className="visiosImage" src={imgStart_1} />
                  </Col>
                  <Col>
                  <Image className="visiosImage" src={imgStart_2} />
                  </Col>
                </Row>
                <Row className="row2">
                  <Col>
                  <Image className="visiosImage" src={imgStart_3} />
                  </Col>
                  <Col>
                  <Image className="visiosImage" src={imgStart_4} />
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </Element>

      <Element id='vision' name='vision'>
        <Container className='sectionContainer'>
            <Row>
              <Col>
                <Row>
                  <Col>
                  <Image className="sideImage" src={imgCollection} />
                  </Col>
                </Row>
              </Col>
              <Col className='mainCol'>
                <h1 className='welcome'>Your NFT collection. We build it.</h1>
                <p className='welcomeParagraph'>NFT’s have ushered in a digital revolution. Art has fused with the internet, people can truly own digital art with NFT’s.</p>
                <p className='welcomeParagraph'>Artists & creators need access to NFT’s; not just coders and industry insiders. We remove the technical barrier of launching NFT collections. So artists & creators just focus on their craft.</p>
              </Col>
            </Row>
          </Container>
        </Element>

        <Element id='approach' name='approach'>
        <Container className='sectionContainer'>
            <Row>
              <Col className='mainCol'>
                <h1 className='welcome approachTitle'>Our approach</h1>
                <h2 className='subTitleH2'>Tech is on us</h2>
                <p className='welcomeParagraph'>We deploy smart contracts, launch the mint page, and decentrally store assets for your NFT collection.</p>
                <h2 className='subTitleH2'>Your vision, our guidance</h2>
                <p className='welcomeParagraph'>We work closely with artists & creators to execute their vision. We guide you through the creation and launch of your NFT collection.</p>
                <h2 className='subTitleH2' >Artist ownership</h2>
                <p className='welcomeParagraph' >Anything that we make is 100% owned by the artists & creators. We build it, you own it.</p>

              </Col>
              <Col>
              <Image className="approachImage" src={imgApproach} />
                {/* <Row>
                  <Col>
                  <Image className="sideIcon" src={imgTech} />
                  </Col>
                </Row>
                <Row className="row2">
                  <Col>
                  <Image className="sideIcon" src={imgGuidance} />
                  </Col>
                </Row>
                <Row className="row2">
                  <Col>
                  <Image className="sideIcon" src={imgOwnership} />
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </Element>

        
        {/* <Container style={{marginTop: '100px', marginBottom: '50px'}}>
          <Row>
          <Col>                  
            <Image className='subImage' src={imgSub_1}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_2}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_3}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_4}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_5}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_6}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_7}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_8}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_9}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_10}/>
          </Col>
          </Row>
        </Container> */}

        
        <Element styleid='news' name='news'>
        <Container className='sectionContainer'>
        <h2 className='titleH2'>In the news</h2>
            <Row>
              <Col className="mainCol">
                <div style={{maxWidth: '800px'}}>
                  <h2 className='newsTitleH2' >Named one of 50 world's most innovative companies and no.1 gaming company of 2022</h2>
                  <Row style={{alignItems: 'center'}}>
                    {/* <Col md="auto">
                      <Image className="newsBar" src={imgNewsBarPurple}/>
                    </Col> */}
                    <Col>
                    <p className='newsParagraph' >Business Insider</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h2 className='newsTitleH2' >“This is an entirely new way to own something.”</h2>
                  <Row style={{alignItems: 'center'}}>
                    {/* <Col md="auto">
                      <Image className="newsBar" src={imgNewsBarPurple}/>
                    </Col> */}
                    <Col>
                    <p className='newsParagraph' >Crypto News</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h2 className='newsTitleH2' >“A cultural phenomenon”</h2>
                  <Row style={{alignItems: 'center'}}>
                    {/* <Col md="auto">
                      <Image className="newsBar" src={imgNewsBarPurple}/>
                    </Col> */}
                    <Col>
                    <p className='newsParagraph' >Wall Street Journal</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h2 className='newsTitleH2' >“The most used contract in blockchain”</h2>
                  <Row style={{alignItems: 'center'}}>
                    {/* <Col md="auto">
                      <Image className="newsBar" src={imgNewsBarPurple}/>
                    </Col> */}
                    <Col>
                    <p className='newsParagraph' >Forbes</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <Row >
                  <Col>
                    <Image className="newsImage" src={imgNews} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Element>

        <Element id='services' name='services'>
        <Container className='sectionContainer'>
            <Row>
              <Col className='mainCol'>
                <h2 className='titleH2'>Tasks we take care of:</h2>
                <Row>
                  <Col>
                    <Image className="sideIcon" src={imgArtwork} />
                    <p className='iconParagraph'>Artwork <br></br>Generation</p>
                  </Col>
                  <Col>
                    <Image className="sideIcon" src={imgSmartContract}/>
                    <p className='iconParagraph'>Smart <br></br>Contracts</p>

                  </Col>
                  <Col>
                    <Image className="sideIcon" src={imgAsset} />
                    <p className='iconParagraph'>Asset <br></br>Deployment</p>

                  </Col>
                  <Col>
                    <Image className="sideIcon" src={imgWebsite} />
                    <p className='iconParagraph'>Website <br></br>Development</p>

                  </Col>
                  <Col>
                    <Image className="sideIcon" src={imgSupport} />
                    <p className='iconParagraph'>Continuous <br></br>Support</p>

                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Element>
{/* 
        <Container style={{marginTop: '100px', marginBottom: '50px'}}>
          <Row>
          <Col>                  
            <Image className='subImage' src={imgSub_3}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_10}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_5}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_6}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_7}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_4}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_2}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_1}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_8}/>
          </Col>
          <Col>                  
            <Image className='subImage' src={imgSub_9}/>
          </Col>
          </Row>
        </Container> */}


        <Element id='projects' name='projects'>
        <Container className='sectionContainer'>
        <h2 className='titleH2'>Our projects</h2>

            <Row style={{marginTop: '80px'}}>
              <Col className="featuredCol" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                  <Image className="featuredImage" src={imgFeatured_1} />
             </Col>
              <Col className='mainCol'>
                <Row>
                  <Col>
                    <h2 className='subTitleH2'>Masks of Ether</h2>
                    <p className='welcomeParagraph'>A collection of generative masks inspired by West-African tribal art. Aiming to share rich African culture in the NFT space.</p>
                    <Row>
                      <Col>
                        <Image className="statImage" src={imgStat_1} />
                        <Image className="statImage" src={imgStat_2} />

                      </Col>
                    </Row>
                    {/* <Row>
                      <Col md="auto">
                        <Image className="statBar" src={imgBarRed}/>
                      </Col>
                      <Col>
                        <div>
                          <h2 className='statH3'>$50k+</h2>
                          <p className='statParagraph'>in transactions</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="auto">
                        <Image className="statBar" src={imgBarPurple}/>
                      </Col>
                      <Col>
                        <div>
                          <h2 className='statH3'>100+</h2>
                          <p className='statParagraph'>news mentions</p>
                        </div>
                      </Col>
                    </Row> */}
                  </Col>
                  
                </Row>
              </Col>
            </Row>
            <p className='soonParagraph' style={{marginTop: '50px'}}>Stay tuned for our newest projects!</p>
          </Container>
        </Element>

        {/* <Element id='get_started' name='get_started'>
        <Container>
            <Row>
              <Col className='mainCol'>
              <h2 className='titleH2'>Get started</h2>
                <div style={{maxWidth:"800px", backgroundColor: "#ffffff", marginTop: "20px", padding: "20px",  border:"1px solid #C1C8E4", borderRadius: "25px"}}>
                  <Row>
                    <Col>
                    <h2 className='subTitleH2'>Visios Labs brings creative visions to life in the NFT space</h2>
                    <Button style={{marginTop: "24px"}} className="startBtn" variant="primary" size="lg">
                      <span className="startSpan">Get in touch</span> 
                    </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Element> */}

        <Element id='get_started' name='get_started'>
          <Container className='sectionContainer'>
            <Row>
              <Col className='mainCol'>                
                  <Row>
                    <Col style={{paddingRight: '100px'}}>
                    <h2 className='welcome'>We’ll help launch your art into the NFT space.</h2>
                    <p className='formParagraph'>Fill out the form, and we'll reach out to get your NFT journey started! Alternatively contact us at contact@visioslabs.com.</p>

                      <Form>
                        <Form.Group className='startedForm' controlId="formBasicEmail">
                          <Form.Label className='labelInput'>First name</Form.Label>
                          <Form.Control className="input" type="text" />
                        </Form.Group>

                        <Form.Group className='startedForm' controlId="formBasicEmail">
                          <Form.Label className='labelInput'>Last name</Form.Label>
                          <Form.Control className="input" type="text" />
                        </Form.Group>

                        <Form.Group className='startedForm' controlId="formBasicEmail">
                          <Form.Label className='labelInput'>Email address</Form.Label>
                          <Form.Control className="input" type="email" />
                        </Form.Group>

                        <Form.Group className='startedForm' controlId="formBasicEmail">
                            <Form.Label className='labelInput'>Tell us about your project</Form.Label>
                            <Form.Control className='input' as="textarea" rows={2} />
                        </Form.Group>

                        <Button style={{marginTop: "50px"}} className="startBtn" type="submit" variant="primary" size="lg">
                          <span className="startSpan">Submit</span> 
                        </Button>
                      </Form>
                    </Col>
                    <Col style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                        <Image className="rocketImage" src={imgRocket} />
                    </Col>
                  </Row>
              </Col>
            </Row>
          </Container>
        </Element>

        </Container>

        <hr style={{backgroundColor: "#C1C8E4"}}></hr>
        <footer>
          <Container>
            <Row>
              <Col style={{textAlign:"start"}} >
                <Image src={logo} className='footerImage' roundedCircle/>
              </Col>
            

              <Col className="rightTraitsCol">
                <Row> <p className="copyrightText">Copyright © Visios Labs</p></Row>
              </Col>
            </Row>
          </Container>
          
        </footer>   
    </div>
  );
}

export default App;
