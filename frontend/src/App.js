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
  

    <div className="overflow-auto ml-5 p-10" style={{ flex: 1 }}>
        {MainComponent()}
      </div>


);








}