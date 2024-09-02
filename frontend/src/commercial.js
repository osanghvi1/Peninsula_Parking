import './App.css';
import logo from './Pictures/plogo.png';
import axios from "axios";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from "./Pictures/BannerImage7.png"
import People from './Pictures/people.png';
import Gears from './Pictures/Gear-People.png'
import ValetIcon from './Pictures/bvalet.png'; 
import BuisnessImage from './Pictures/buisness-image.jpg'; 
import { useState, useEffect } from "react";


export function Commercial() {
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
              <h1>PENINSULA PARKING SOLUTIONS FOR BUSINESS</h1>
            </div>
          </div>
        );
      };
      
    const WelcomeSection = () => {
        return (
            <div>
              <div className="header-content">
                <h1>OUR SERVICES</h1>
                <div className="header-separator"></div>
                <p style={{color: 'black'}}>At Peninsula Parking, we have provided thousands of businesses with reliable and professional parking solutions. We specialize in creating convenient and cost-effective parking solutions that are tailored to the needs of any business, large or small. Our team of experienced professionals will work with you to create a custom parking solution that meets the needs of your business.</p>
              </div>
              <div className="services-grid">
                <div className="service-item">
                <img src={People} alt="Valet Service Icon" className="service-icon" />
                  <h3>Reliable And Professional</h3>
                  <h2>SERVICES</h2>
                  <p>Whether you require short or long-term parking solutions, our team at Peninsula Parking is here to help. We provide reliable and professional services, so you can trust that your parking needs are being taken care of. We understand that parking solutions are an important part of any business, and we strive to provide the best possible service for all of our clients.</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={Gears} alt="Security Icon" className="service-icon" />
                  <h3>Convenient And Cost-Effective</h3>
                  <h2>PARKING SOLUTIONS</h2>
                  <p>At Peninsula Parking, safety and security are our top priorities. We employ a highly trained staff that is committed to providing the highest levels of security and safety for your guests. Our team is experienced in handling a wide range of security situations.</p>
                </div>
                <div className="service-item" style={{marginRight:'5%'}}>
                <img src={ValetIcon} alt="Security Icon" className="service-icon" />
                  <h3>Valet Services And</h3>
                  <h2>SHUTTLE SERVICES</h2>
                  <p>We also offer a variety of additional services, such as valet parking and shuttle services. Our valet services are available for both short and long-term parking solutions. We provide professional and reliable shuttle services for businesses, so you can have peace of mind that your employees and customers are taken care of.</p>
                </div>
              </div>
            </div>
          );
      }

     const BuisnessSection = () => {
            return (
              <div className="insurance-section">
                <div className="text-section">
                  <h2>EXPERIENCED PROFESSIONALS TO CUSTOMIZE YOUR PARKING SOLUTION</h2>
                  <p>At Peninsula Parking, our team of experienced professionals is here to help. We understand that every business has different parking needs and solutions, so we strive to create a custom solution that meets the needs of your business. No matter the size of your business, our team is here to make sure your parking needs are taken care of.</p>
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
export default Commercial;

