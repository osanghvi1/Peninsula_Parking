import './App.css';
import logo from './Pictures/plogo.png';
import ceo from './Pictures/CEO.jpg'
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);


const AboutSection = () => {

    return (
        <div className="about-section">
          <h1>BAY AREA'S PREMIER PARKING MANAGEMENT COMPANY</h1>
          <div className="about-content">
            <div className="about-block">
              <h2>ABOUT PENINSULA PARKING</h2>
              <p>Peninsula Parking is a Bay Area-based parking management company that specializes in providing secure and safe parking solutions to the area's clients. Established in 2006 by Rae Ann and her late husband Neil, Peninsula Parking has been Diamond Certified for the past 10 years and proudly serves the Bay Area with a diverse staff of veterans and women-owned business.</p>
            </div>
            <div className="mission-block">
              <h2>OUR MISSION</h2>
              <p>Peninsula Parking's mission is to provide the Bay Area with a safe and secure parking experience that is tailored to the needs of each customer. We are committed to providing our clients with the highest level of customer service, safety, and security, so that they can rest assured that their parking experience is a positive one.</p>
            </div>
            <div className="values-block">
              <h2>OUR VALUES</h2>
              <p>At Peninsula Parking, we believe in putting the customer first. We're committed to offering a safe and secure parking experience for our clients, no matter the size of the event or business. Our team is dedicated to providing outstanding customer service, and is passionate about providing a superior experience and passionate about providing a superior service.</p>
            </div>
          </div>
        </div>
      );
    
}
const Image = () => {
    return (
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src={ceo} alt="Roy Nickolai" />
            <div>
              <h3>Rae Ann</h3>
              <p>CEO/Founder</p>
              <p>....</p>
            </div>
          </div>
          <div className="team-member">
            <img src={ceo} alt="Tim Costello" />
            <div>
              <h3>Javier Garcia</h3>
              <p>Title Of Job</p>
              <p>...</p>
            </div>
          </div>
        </div>
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


    const MobileNavbar = () => {
      const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => {
          setIsOpen(!isOpen);
      };
  
      return (
          <nav className="mobile-navbar" style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#f2f2f2', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', zIndex: 1000 }}>
              <Container className="d-flex justify-content-between align-items-center" style={{ height: '60px' }}>
                  <div className="logo">
                      <a href="/">
                          <img src={logo} alt="Logo" style={{ width: '200px', height: '100%' }} />
                      </a>
                  </div>
                  <button onClick={toggleMenu} className="menu-toggle">☰</button>
                  {isOpen && (
                      <ul className="nav-links" style={{ position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#f2f2f2', display: 'flex', flexDirection: 'column', padding: '10px 0' }}>
                          <li><a href="/Services">Services</a></li>
                          <li><a href="/commercial-services">Commercial Services</a></li>
                          <li><a href="/careers">Careers</a></li>
                          <li><a href="/ContactPage">Contact</a></li>
                      </ul>
                  )}
              </Container>
          </nav>
      );
  };
  
  
  
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

return (
  
    <div>
      
        {isMobile ?   MobileNavbar() : NavbarComponent()}
    
     <div style={{padding:'200px'}}>
       <div>
       {AboutSection()}
       </div>
       
       {Image()}
         </div>
         <div>
          {Footer()}
         </div>
       </div> 
   
   
   );
   




}
export default About;