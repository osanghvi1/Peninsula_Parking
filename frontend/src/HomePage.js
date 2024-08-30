import './App.css';
import logo from './Pictures/plogo.png';
import homeScreen from './Pictures/homeScreen.jpg'

import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import logo1 from "./Pictures/logo1.png"
import logo2 from "./Pictures/logo2.png"
import logo3 from "./Pictures/logo3.png"
import logo4 from "./Pictures/logo4.png"
import logo5 from "./Pictures/logo5.png"
import logo6 from "./Pictures/logo6.png"
import logo7 from "./Pictures/logo7.jpg"
import logo8 from "./Pictures/logo8.png"
import logo9 from "./Pictures/logo9.png"
import logo10 from "./Pictures/logo10.png"
import logo11 from "./Pictures/logo11.png"




export function HomePage() {

   
   
const LogoBar = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];
    return (
      <div className="logo-bar-container">
        <div className="logo-bar">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Company Logo" />
          ))}
          {/* Repeat the logos for a smoother transition */}
          {logos.map((logo, index) => (
            <img key={'copy-' + index} src={logo} alt="Company Logo" />
          ))}
        </div>
      </div>
    );
  }



  const Image = () => {
    return (
      <div className="main-container" >
        <div className="image-container" >
          <img src={homeScreen} alt="Commercial Services" />
          <div className="image-overlay " >
         <Container >
            <div class = "image-box" >
              <div className="header-content" >
                <h1 style={{fontSize:'258%'}}>WELCOME TO PENINSULA PARKING</h1>
                <div className="header-separator"></div>
                <h2 style={{color: 'black' , fontSize:'138%'}}>We are an industry leader and trusted partner providing parking solutions of all kinds in the Bay Area. We provide valet service, traffic flow and lot management, shuttle service, and other concierge services for private and public events at homes and venues. Our team has been serving the Bay Area for nearly 20 years, providing top-quality customer service and earning a “Diamond Certified” rating.</h2>
              </div>
              <a href="/ContactPage">
            <button className="talk-to-us-btn" >Talk to Us</button>
            </a>
            </div>
      
          
          
            </Container>


          </div>
    
        </div>
        
      </div>
      
    );
}


  const Footer = () => {
        return (
          <footer className="footer">
            <Container>
              <Row>
                <Col md={3} sm={6}>
                  <h5>Peninsula Parking</h5>
                  <p><i className="fas fa-phone"></i> (855) 736-7275</p>
                  <p><i className="fas fa-phone"></i> info@peninsulaparking.com</p>
                  <p><i className="fas fa-phone"></i> 541 Taylor Way Suite 12 </p>
                  <p><i className="fas fa-phone"></i> San Carlos, CA 94070</p>
                </Col>
                <Col md={3} sm={6}>
                  <h5>Services</h5>
                  <ul>
                    <li><a href='/Valet' style={{ textDecoration: 'none', color: 'inherit' }} >Valet Parking </a></li>
                    <li><a href='/Traffic'  style={{ textDecoration: 'none', color: 'inherit' }}>Traffic Control</a></li>
                    <li><a href='/Golf'  style={{ textDecoration: 'none', color: 'inherit' }}>Golf Cart Service</a></li>
                    <li><a href='/commercial-services' style={{ textDecoration: 'none', color: 'inherit' }}>Commercial Services</a></li>
                    {/* Add more services as needed */}
                  </ul>
                </Col>
                <Col md={3} sm={6}>
                  <h5>Company</h5>
                  <ul>
                    <li><a href='/careers' style={{ textDecoration: 'none', color: 'inherit' }}>Employment</a></li>
                    <li><a href= '/ContactPage' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</a></li>

                  </ul>
                </Col>
                <Col md={3} sm={6}>
                  <h5>Locations</h5>
                  <ul>
                  <li>North Bay</li>
                  <li>South Bay</li>
                  <li>Greater Area</li>
                    {/* Add more locations as needed */}
                  </ul>
                </Col>
              </Row>
            </Container>
          </footer>
        );
      }


  
      const NavbarComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => setIsOpen(!isOpen);

        return (
          
          <nav className="navbar" style={{position: 'fixed'}}>

          <Container>
            <div className="logo">
              <a href="/">
                <img style={{ width: '200px', height: '80%' }} src={logo} alt="Logo" />
              </a>
            </div>
            <ul className="nav-links">
              {/* Dropdown menu for Valet Parking */}
              <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <a href="/Services">Services</a>
                {isOpen && (
                  <ul className="dropdown-content" style={{ position: 'absolute', listStyleType: 'none', backgroundColor: 'white', padding: '1%', margin: '0%' }}>
                    <li><a href="/Valet">Valet Parking</a></li>
                    <li><a href="/Traffic">Traffic Control</a></li>
                    <li><a href="/Golf">Golf Cart Service</a></li>
                  </ul>
                )}
              </li>
              {/* Other links */}
              <li><a href="/commercial-services">Commercial Services</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/ContactPage">Contact</a></li>
            </ul>
            <button className="quote-btn" a href="/quote" style={{ padding: '10px', color: 'black', fontSize: '20px'}} >
              <a href="/quote" style={{ color: 'black', textDecoration: 'none' }}>Request a Quote</a>
            </button>
          </Container>
        </nav>
        );
      };
    
    
    
       
return (
  
    <div>
      
     {NavbarComponent()}
     <div >
       {Image()}
       <div>
<Container>
       <div style={{marginTop:'0.5%', marginBottom:'0.5%'}}>
       
        {LogoBar()}
        
        </div>
        </Container>
       <div>
   <div style={{ marginBottom:'25px' }}>
       
      <div>
       {Footer()}
         </div>
         </div>
         </div>
         </div>
       </div> 
       </div>
   
   
   );
   




}
export default HomePage;
