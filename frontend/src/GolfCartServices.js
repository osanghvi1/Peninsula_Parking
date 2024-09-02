import './App.css';
import logo from './Pictures/plogo.png';
import axios from "axios";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from "./Pictures/Stock3.jpg"
import People from './Pictures/people.png';
import Gears from './Pictures/Gear-People.png'
import ValetIcon from './Pictures/bvalet.png'; 
import BuisnessImage from './Pictures/Stock5.jpg'; 
import { useState, useEffect } from "react";


export function GolfCartServices() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  
    const Banner = () => {
        return (
          <div className="banner">
            <img src={bannerImage} alt="Valet Parking Services" className="banner-image" />
            <div className="banner-text">
              <h1>GOLF CART SERVICES</h1>
            </div>
          </div>
        );
      };
      
    const WelcomeSection = () => {
        return (
            <div>
              <div className="header-content">
                <h1>Convenient and Elegant Guest Transportation</h1>
                <div className="header-separator"></div>
                <p style={{color: 'black'}}>Our Golf Cart Services offer a stylish and efficient way to transport your guests across large event venues. Whether it’s a sprawling outdoor wedding, a corporate retreat, or a festival, our fleet of golf carts ensures that every attendee reaches their destination comfortably and on time.</p>
              </div>
              <div className="services-grid">
                <div className="service-item">
                <img src={People} alt="Valet Service Icon" className="service-icon" />
                  <h3>Comfortable And</h3>
                  <h2>Safe Transportation</h2>
                  <p>Our golf carts are equipped to provide a smooth and safe ride, allowing guests to enjoy the event without worrying about long walks or difficult terrain.</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={Gears} alt="Security Icon" className="service-icon" />
                  <h3>Expert and Attentive Chauffeurs</h3>
                  <h2>Professional Drivers:</h2>
                  <p> Our courteous and skilled drivers ensure that guests are transported quickly and safely, enhancing their overall event experience..</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={ValetIcon} alt="Security Icon" className="service-icon" />
                  <h3>Accessibility and</h3>
                  <h2>Convenience:</h2>
                  <p> Our service is designed to accommodate all guests, including those with mobility challenges. We provide easy access to all areas of your event, ensuring that everyone can participate fully.</p>
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
                  <p>Our Golf Cart Services add a touch of elegance and convenience to any event, making transportation a seamless part of the experience. We’re committed to providing a service that complements the flow and style of your event, ensuring your guests’ comfort and satisfaction..</p>
                  <h4>Let us handle the transportation logistics, so your guests can focus on enjoying the event to the fullest.</h4>
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
    
    
    
      return (
  
    <div>
      
       {isMobile ?   MobileNavbar() : NavbarComponent()}
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
export default GolfCartServices;

