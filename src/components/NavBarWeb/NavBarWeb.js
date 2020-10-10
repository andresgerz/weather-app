import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, ButtonToolbar } from 'react-bootstrap';
  
import './NavBarWeb.css';

// I import Font Awesome icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCloud
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
  fab,
  faCloud
)

// Hook component
export default function NavBarWeb() {
  
        return (  

          <div id="navbar-wrapper" className="w-100" className="container-fluid">

            <div className="website-name float-left text-light">
              <div className="weather-icon-nav">
                <FontAwesomeIcon icon={faCloud} size="3x" className="weather-icon" />
              </div>
              <div className="weather-app">
                <strong>Weather App</strong>
                <p>tagline goes here</p>
              </div>
            </div>
              <div className="options">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <ButtonToolbar>
                      <Nav className="mr-auto">
                        <button className="button-home border-primary"><Link className="text-primary" to="/">Home</Link></button>  
                        <button className="buttons"><Link className="text-light" to="/charts">Charts</Link></button>  
                        <button className="buttons"><Link className="text-light" to="/news" >News</Link></button>  
                        <button className="buttons"><Link className="text-light" to="/contact" >Contact</Link></button>  
                        <button className="buttons"><Link className="text-light" to="/login">Login</Link></button>  
                      </Nav>
                    </ButtonToolbar>
                  </Navbar.Collapse>
                </Navbar>
              </div>
          </div>                  
    )
}