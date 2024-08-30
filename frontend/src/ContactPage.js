import React, { useState } from 'react';
import './App.css';
import logo from './Pictures/plogo.png';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";


const ContactPage = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Make POST request to your backend
    axios.post('http://localhost:4000/ContactPage', formData)
      .then(response => {
        alert('Message sent successfully!');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Failed to send message:', error);
        alert('Failed to send message.');
      });

    // Optionally reset form after sending
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

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
    <div>
     {NavbarComponent()}
    
      <Container style={{marginTop: '2%'}}>
        <Row>
          <Col>
            <div className="contact-details">
              <h2>Contact us.</h2>
              <p>info@peninsulaparking.com</p>
              <p>(800)-758-2538</p>
              <p>541 Taylor Way<br />San Carlos, CA 94070 </p>
              <div className="social-media">
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://email.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6329.454494750948!2d-122.2620005375157!3d37.51435067362221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa200813fc6bb%3A0x22d3bb27956a2ada!2s541%20Taylor%20Way%2C%20San%20Carlos%2C%20CA%2094070!5e0!3m2!1sen!2sus!4v1720904602738!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
   
            </div>
          </Col>
          <Col>
            <div className="contact-form">
              <Form onSubmit={handleSubmit} >
                <Form.Group>
                  <Form.Label>First Name (required)</Form.Label>
                  <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email (required)</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message (required)</Form.Label>
                  <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button type="submit">Send</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
     
    </div>
    <div style={{marginTop:'4%'}}>
    {Footer()}
    </div>
    </div>
  );
};

export default ContactPage;
