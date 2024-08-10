import './App.css';
import logo from './logo.png';
import homeScreen from './homeScreen.jpg'
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const MainComponent = () => {
    return (
      <div className="main-container">
        <div className="image-container" >
          <img src={homeScreen} alt="Commercial Services" />
          <div className="image-overlay">
            <h1>Commercial Services</h1>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  export default function HomePage() {
  
  
  return (
    
   <div>
    <Container>
    <nav className="navbar">
      <div className="logo">
        <img className="h-10 mr-3" style={{ width: '150px', height: '150px', padding: '5px' }} src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#Services">Valet Parking</a></li>
        <li><a href="#commercial-services">Commercial Services</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="ContactPage">Contact</a></li>
      </ul>
      <button className="quote-btn">Request a Quote</button>
      <div className="overflow-auto ml-5 p-10" style={{ flex: 1 }}>
          {MainComponent()}
        </div>
    </nav>
    </Container>
      </div> 
  
  
  );
  
  
  
  
  
  
  
  
  }