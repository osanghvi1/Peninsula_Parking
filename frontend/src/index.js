import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactPage from './ContactPage';
import QuotePage from './Quote';
import About from './About';
import Careers from './Careers'
import ValetParking from './Valet';
import Commercial from './commercial';
import VParking from './ValetParking';
import TrafficControl from './TrafficControl';
import GolfCartServices from './GolfCartServices';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   
   
   
    <Route
    path ="/" 
    element={<HomePage/>}
    />

<Route
    path ="/Valet" 
    element={<VParking/>}
    />

<Route
    path ="/Traffic" 
    element={<TrafficControl/>}
    />

<Route
    path ="/Golf" 
    element={<GolfCartServices/>}
    />
    <Route
    path ="/ContactPage"
    element={<ContactPage/>}
    />
 
 <Route
    path ="/Quote"
    element={<QuotePage/>}
    />
  <Route
    path ="/About"
    element={<About/>}
    />

<Route
    path ="/Careers"
    element={<Careers/>}
    />
<Route
    path ="/commercial-services"
    element={<Commercial/>}
    />

<Route
    path ="/Services"
    element={<ValetParking/>}
    />
   </Routes>
   

   
   </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
