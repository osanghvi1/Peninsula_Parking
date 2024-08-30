import './App.css';
import logo from './Pictures/plogo.png';
import axios from "axios";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from "./Pictures/stock4.jpg"
import People from './Pictures/people.png';
import Gears from './Pictures/Gear-People.png'
import ValetIcon from './Pictures/bvalet.png'; 
import BuisnessImage from './Pictures/Stock2.jpg'; 
import { useState, useEffect } from "react";


export function TrafficControl() {
  
    const Banner = () => {
        return (
          <div className="banner">
            <img src={bannerImage} alt="Valet Parking Services" className="banner-image" />
            <div className="banner-text">
              <h1>TRAFFIC CONTROL</h1>
            </div>
          </div>
        );
      };
      
    const WelcomeSection = () => {
        return (
            <div>
              <div className="header-content">
                <h1>Event Traffic Management</h1>
                <div className="header-separator"></div>
                <p style={{color: 'black'}}>At Event Traffic Management, we specialize in orchestrating smooth and efficient traffic flow for events of all sizes. Whether you’re hosting a large-scale festival, a corporate gathering, or a private celebration, our team of experts is dedicated to ensuring that your attendees arrive and depart safely and efficiently.</p>
              </div>
              <div className="services-grid">
                <div className="service-item">
                <img src={People} alt="Valet Service Icon" className="service-icon" />
                 <h3>Strategic and Tailored Traffic Planning</h3>
                  <h2>Comprehensive Traffic Planning</h2>
                  <p>We work closely with event organizers and local authorities to develop customized traffic management plans that minimize congestion and enhance safety.</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={Gears} alt="Security Icon" className="service-icon" />
                  <h3>Seamless and Professional</h3>
                  <h2>On-Site Traffic Control</h2>
                  <p>Our professional staff is trained in directing vehicles, managing parking lots, and ensuring pedestrian safety, allowing your guests to focus on enjoying the event..</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={ValetIcon} alt="Security Icon" className="service-icon" />
                  <h3>Advanced Signage And</h3>
                  <h2>Communication</h2>
                  <p>We deploy clear, strategically placed signage and provide real-time communication updates to guide attendees and prevent confusion.</p>
                </div>
              </div>
            </div>
          );
      }

     const BuisnessSection = () => {
            return (
              <div className="insurance-section">
                <div className="text-section">
                  <h2>Why Choose Us?</h2>
                  <p>With years of experience in event traffic management, we understand the unique challenges that come with managing the flow of vehicles and people. Our goal is to provide a seamless experience for your guests from the moment they arrive until they leave, helping to make your event a success.</p>
                  <h4>Let us handle the logistics, so you can focus on what truly matters—delivering an unforgettable experience for your attendees.</h4>
                </div>
                <div className="image-section">
                  <img src={BuisnessImage} alt="Car" />
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
                <li><a href='/About' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a></li>
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
              <li><a href="/about">About</a></li>
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
     {Banner()}
     <div>
     {WelcomeSection()}
     </div>
     <div>
    {BuisnessSection()}
     </div>
       <div>
       {Footer()}
         </div>
         </div>
         </div>

   
   
      );
   




}
export default TrafficControl;

