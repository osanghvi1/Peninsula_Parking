import React, { useState } from 'react';
import './App.css';
import logo from './Pictures/plogo.png';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

const Careers = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmedEmail: "",
    phone: ""
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
    axios.post('http://localhost:4000/Carrers', formData)
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
      confirmedEmail: "",
      phone: ""
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

  return (
    <div>
      <div>
      {NavbarComponent()}
      </div>
    <Container className='careerTextBox'>
      <Row>
        <Col md={8}>
        <h1>Valet Attendant, Part Time $25/hr and up </h1><h1>(San Francisco, CA)</h1>
            <h3>Job Details</h3>
            <p><strong>Location:</strong> San Jose, CA</p>
            <p><strong>Position Type:</strong> Part Time</p>
            <p><strong>Salary Range:</strong> $25.00 - $28.00 Hourly (including tips)</p>
            <p><strong>Job Category:</strong> Transportation</p>
            
            <h3>Description</h3>
            <p>Need extra income and like to drive cars? Here at Peninsula Parking, we are looking for Full-Time, Part-Time, and Seasonal employees who are energetic, motivated, radiate positive energy, professional and possess a thorough understanding of customer service. We valet at special events and fixed corporate locations throughout San Francisco, the Peninsula, South Bay, East Bay, and North Bay.</p>
            <p>Peninsula Parking provides you with effective training programs and access to the seasoned management team to accelerate your self-growth. With a continuously expanding company, there are unlimited possibilities for you! We welcome students and applicants with valet, retail, cashier, sales and customer service experience. Valet Attendant experience preferred but not required. We are willing to train the right individuals!</p>
            
            <h3>General Duties and Responsibilities</h3>
            <ul>
              <li>Deliver great customer service by being helpful, courteous and enthusiastic.</li>
              <li>Drive and park a variety of vehicles efficiently and safely.</li>
              <li>Receive and deliver vehicles exceeding guests' expectations.</li>
              <li>Maintain a well-groomed and professional appearance at all times.</li>
              <li>Treat our clients’ vehicles with great care always putting safety first.</li>
              <li>Lightly jog during busy hours to and from vehicles.</li>
              <li>Be punctual.</li>
              <li>Have excellent communication, both written and oral, and interpersonal skills.</li>
              <li>Drive manual transmission (preferred).</li>
              <li>Be based within 20 miles of the Peninsula Bay Area (San Francisco to San Jose).</li>
              <li>Open to working fixed locations and events.</li>
            </ul>
            
            <h3>Valet Attendant Perks</h3>
            <ul>
              <li>Growth and career opportunities.</li>
              <li>Paid orientation and training.</li>
              <li>Monthly recognition rewards.</li>
              <li>Medical, vision, and dental insurance.</li>
              <li>Flexible schedules.</li>
              <li>Referral bonuses.</li>
            </ul>
            
            <h3>Before You Apply</h3>
            <p>You must meet these requirements:</p>
            <ul>
              <li>Be at least 19 years of age.</li>
              <li>Have a valid driver’s license with no accidents or two-point driving infractions.</li>
              <li>Minimum 3 years of driving experience.</li>
              <li>Able to walk, run, or stand for up to 8 hours at a time.</li>
              <li>Able to lift up to 15 pounds.</li>
              <li>Willing to work outdoors in all weather conditions including rain.</li>
              <li>Customer service experience preferred (e.g., valet, retail, sales, cashier, receptionist).</li>
            </ul>
        </Col>
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <h2>Apply Now</h2>
            <Form.Group className="mb-3">
              <Form.Label>Legal First Name*</Form.Label>
              <Form.Control name="firstName" type="text" placeholder="Enter first name" value={formData.firstName} onChange={handleChange}  required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Legal Last Name*</Form.Label>
              <Form.Control name="lastName" type="text" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Email*</Form.Label>
              <Form.Control name="confirmedEmail" type="email" placeholder="Confirm email" value={formData.confirmedEmail} onChange={handleChange} required  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone*</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Start Application
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    {Footer()}
    </div>
  );
}

export default Careers;
