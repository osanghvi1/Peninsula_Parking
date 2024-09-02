import './App.css';
import logo from './Pictures/plogo.png';
import homeScreen from './Pictures/homeScreen.jpg'
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from "./Pictures/bannerImage2.jpg"
import starIcon from "./Pictures/headerDiv.png"
import ValetIcon from './Pictures/valet-icon.png'; 
import SecurityIcon from './Pictures/security-icon.png'; 
import CarImage from './Pictures/car-image.jpg';  





export function ValetParking() {
 
 
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
              <h1>VALET PARKING SERVICES AND SHUTTLE SOLUTIONS</h1>
            </div>
          </div>
        );
      };
      
    const WelcomeSection = () => {
        return (
            <div>
              <div className="header-content">
                <h1>WELCOME TO PENINSULA PARKING</h1>
                <div className="header-separator"></div>
                <p style={{color: 'black'}}>At Peninsula Parking, we are dedicated to providing a comprehensive valet service that is tailored to meet the needs of any business or event. Our experienced team of valets has you covered for all of your parking needs, ensuring that your guests can enjoy their visit without worrying about where to park.</p>
              </div>
             
              <div className="services-grid">
                
                <div className="service-item">
                <img src={ValetIcon} alt="Valet Service Icon" className="service-icon" />
                  <h3>Our</h3>
                  <h2>VALET SERVICES</h2>
                  <p>We offer a range of services, from basic valet parking to more specialized services, such as valet parking for special events. Our team has the experience and expertise to ensure that each and every guest has a safe and enjoyable experience.</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={SecurityIcon} alt="Security Icon" className="service-icon" />
                  <h3>Our</h3>
                  <h2>SECURITY</h2>
                  <p>At Peninsula Parking, security are our top priorities. We employ a highly trained staff that is committed to providing the highest levels of security for your guests. Our team is experienced in handling a wide range of security situations.</p>
                </div>
              </div>
            </div>
          );
      }

     const InsuranceSection = () => {
            return (
              <div className="insurance-section">
                <div className="text-section">
                  <h2>SAFTEY</h2>
                  <p>We prioritize the safety of your guests and their vehicles above all. Our team is extensively trained and follows rigorous safety protocols to ensure a secure environment. Each member is equipped to handle and prevent any safety concerns, providing peace of mind throughout your event.</p>
        <h4>Let us handle the transportation logistics, so your guests can focus on enjoying the event to the fullest.</h4>
                </div>
                <div className="image-section">
                  <img src={CarImage} alt="Car" />
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
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isServicesOpen, setIsServicesOpen] = useState(false);
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            if (isServicesOpen) setIsServicesOpen(false); // Close services dropdown when toggling the menu
        };
    
        const handleServicesClick = () => {
            // Toggle services view when "Services" is clicked
            setIsServicesOpen(!isServicesOpen);
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
                    {isMenuOpen && (
                        <ul className="nav-links" style={{ position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#f2f2f2', display: 'flex', flexDirection: 'column', padding: '10px 0' }}>
                            <li onClick={handleServicesClick} className='mNavBar'>Services </li>
                            {isServicesOpen && (
                                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                                    <a href="/Valet" className='mNavBar' style={{ padding: '10px 0'  }}>Valet Parking</a>
                                    <a href="/Traffic" className='mNavBar' style={{ padding: '10px 0' }}>Traffic Control</a>
                                    <a href="/Golf" className='mNavBar' style={{ padding: '10px 0' }}>Golf Cart Service</a>
                                </div>
                            )}
                            <li className='mNavBar'><a href="/commercial-services">Commercial Services</a></li>
                            <li className='mNavBar'><a href="/careers">Careers</a></li>
                            <li className='mNavBar'><a href="/ContactPage">Contact</a></li>
                            <button className="quote-btn" a href="/quote" style={{ padding: '10px', color: 'black', fontSize: '20px'}} >
              <a href="/quote" style={{ color: 'black', textDecoration: 'none' }}>Request a Quote</a>
            </button>
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
    {InsuranceSection()}
     </div>
     
       <div>
        
       {Footer()}
         </div>
   
         </div>
      
         </div>

   
   
      );
   




}
export default ValetParking;

