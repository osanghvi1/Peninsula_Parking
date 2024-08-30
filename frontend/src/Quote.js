import logo from './Pictures/plogo.png';
import axios from "axios";
import React from "react";
import './App.css';
import { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import contactImage from "./Pictures/contactImage.jpg"

const QuotePage = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Company: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    Zip: "",
    Email: "",
    Phone: "",
    Contact: "",
    Date: "",
    Arrival: "",
    Depature: "",
    Service: "",
    Guest: "",
    NumberofCars: "",
    Comments: ""
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
    axios.post('http://localhost:4000/Quote', formData)
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
      Company: "",
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      State: "",
      Zip: "",
      Email: "",
      Phone: "",
      Contact: "",
      Date: "",
      Arrival: "",
      Depature: "",
      Service: "",
      Guest: "",
      NumberofCars: "",
      Comments: ""
    });
  };


    const ContactInfo = () => {
        return (
            <Container>
          <div className="contact-info-section">
            <div className="contact-text">
              <h1 className="contact-textH">INTERESTED IN HAVING US FOR YOUR NEXT EVENT, SIMPLY FILL OUT THE FORM BELOW.</h1>
            </div>
            <div className="contact-image">
              <img src={contactImage} alt="Contact Us" />
            </div>
           
          </div>
          
          </Container>
        );
      }


const Quote = () => {
    return (
      <Container>
      <div className="header-separatosr"></div>
      <h2>Request a Quote</h2>
      <p>Fill out the form below and get a quote today.</p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange} 
                required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                name="lastName" 
                type="text" 
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control 
            name="Company" 
            type="text" 
            placeholder="Company (Optional)"
            value={formData.Company}
            onChange={handleChange} />
        </Form.Group>
    
        <Form.Group controlId="formAddress1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control 
            name="AddressLine1" 
            type="text" 
            placeholder="Address Line 1" 
            value={formData.AddressLine1}
            onChange={handleChange}
            required />
        </Form.Group>
    
        <Form.Group controlId="formAddress2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control 
            name="AddressLine2" 
            type="text" 
            placeholder="Address Line 2"
            value={formData.AddressLine2}
            onChange={handleChange} />
        </Form.Group>
    
        <Row>
          <Col md={4}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
                name="City" 
                type="text" 
                placeholder="City"
                value={formData.City}
                onChange={handleChange} 
                required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control 
                name="State" 
                type="text" 
                placeholder="State"
                value={formData.State}
                onChange={handleChange} 
                required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formZip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control 
                name="Zip" 
                type="text" 
                placeholder="ZIP Code"
                value={formData.Zip}
                onChange={handleChange} 
                required />
            </Form.Group>
          </Col>
        </Row>
    
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name="Email" 
            type="email" 
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange} 
            required />
        </Form.Group>
    
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            name="Phone" 
            type="text" 
            placeholder="Phone Number"
            value={formData.Phone}
            onChange={handleChange} />
        </Form.Group>
    
        <Form.Group controlId="formPreferredContact">
          <Form.Label>Preferred method of contact</Form.Label>
          <Form.Control 
            as="select" 
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}>
            <option>Email</option>
            <option>Phone</option>
            <option>Mail</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group controlId="formEventDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control 
            type="date" 
            name="Date"
            value={formData.Date}
            onChange={handleChange}/>
        </Form.Group>
    
        <Form.Group controlId="formTimePeriod">
          <Form.Label>Expected Guest Arrival (s)</Form.Label>
          <Form.Control 
            name="Arrival" 
            type="text" 
            placeholder="Expected Arrival"
            value={formData.Arrival}
            onChange={handleChange} />
          <Form.Label>Expected Guest Depature (s)</Form.Label>
          <Form.Control 
            name="Depature" 
            type="text" 
            placeholder="Expected Depature"
            value={formData.Depature}
            onChange={handleChange} />
        </Form.Group>
    
        <Form.Group controlId="formServiceRequested">
          <Form.Label>Service Requested</Form.Label>
          <Form.Control 
            name="Service" 
            as="select"
            value={formData.Service}
            onChange={handleChange}>
            <option>Select an option</option>
            <option>Valet Parking</option>
            <option>Traffic Control</option>
            <option>Golf Cart Service</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group controlId="formNumberOfGuests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control 
            name="Guest" 
            type="number" 
            placeholder="Number of Guests"
            value={formData.Guest}
            onChange={handleChange} />
        </Form.Group>
    
        <Form.Group controlId="formNumberOfCars">
          <Form.Label>Number Of Cars (required)</Form.Label>
          <Form.Control  
            name="NumberofCars" 
            type="number" 
            placeholder="Number Of Cars"
            value={formData.NumberofCars}
            onChange={handleChange} 
            required />
        </Form.Group>
    
        <Form.Group controlId="formComments">
          <Form.Label>Special Request/Comments</Form.Label>
          <Form.Control 
            name="Comments" 
            as="textarea" 
            rows={3}
            value={formData.Comments}
            onChange={handleChange} />
        </Form.Group>
    
        <Button variant="primary" type="submit" style={{marginTop: '2%', marginBottom: '2%'}}>
          Send
        </Button>
      </Form>
    </Container>
    
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
                    <li>Valet Parking</li>
                    <li>Commercial Services</li>
                    {/* Add more services as needed */}
                  </ul>
                </Col>
                <Col md={3} sm={6}>
                  <h5>Company</h5>
                  <ul>
                    <li>Employment</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
    
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
{NavbarComponent()}

<div>
    {ContactInfo()}
{Quote()}
<div>
    {Footer()}
</div>
     </div>
       </div> 
   
   
   );
   




}
export default QuotePage;