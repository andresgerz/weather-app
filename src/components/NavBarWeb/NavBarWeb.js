import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, ButtonToolbar } from 'react-bootstrap';
  
import './NavBarWeb.css';

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

export default class NavBarWeb extends Component {
  
  render() {
        return (  <React.Fragment>
                    <div id="navbar-wrapper" className="w-100">

                      <div className="w-25 float-left text-light website-name">
                        <div className="weather-icon-nav">
                          <FontAwesomeIcon icon={faCloud} size="2x" className="weather-icon" />
                        </div>
                        <div className="weather-app">
                          <strong>Weather App</strong>
                          <p>tagline goes here</p>
                        </div>
                      </div>

                      <div className="options float-right m-5">
                        <Navbar collapseOnSelect expand="lg" variant="dark">
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <ButtonToolbar>
                              <Nav className="mr-auto">
                                <button className="button-home border-primary"><Link className="text-primary mr-1" to="/Home" href="#home">Home</Link></button>  
                                <button className="buttons"><Link className="text-light mr-1" to="/Maps" href="#maps">Maps</Link></button>  
                                <button className="buttons"><Link className="text-light mr-1" to="/Alerts" href="#alerts">Alerts</Link></button>  
                                <button className="buttons"><Link className="text-light mr-1" to="/News" href="#news">News</Link></button>  
                                <button className="buttons"><Link className="text-light mr-1" to="/Contact" href="#contact">Contact</Link></button>  
                                
                              </Nav>
                            </ButtonToolbar>
                          </Navbar.Collapse>
                        </Navbar></div>
                    </div>

                    {true && <Redirect to="/Home/Home" />}
                  </React.Fragment>
    )
  }
}

