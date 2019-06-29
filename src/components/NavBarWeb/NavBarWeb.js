import React, { Component } from 'react';
import { Nav, Navbar, ButtonToolbar } from 'react-bootstrap';

import './NavBarWeb.css';

export default class NavBarWeb extends Component {
  
  render() {
    return (  <div id="navbar-wrapper" className="w-100">

                <div className="float-left m-5 text-light"><strong>Weather App</strong>
                  <p>tagline goes here</p>
                </div>

                <div className="options float-right m-5">
                  <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <ButtonToolbar>
                        <Nav className="mr-auto">
                          <button className="button-home border-primary"><Nav.Link className="text-primary mr-1" href="#home">Home</Nav.Link></button>  
                          <button className="buttons"><Nav.Link className="text-light mr-1" href="#maps">Maps</Nav.Link></button>  
                          <button className="buttons"><Nav.Link className="text-light mr-1" href="#alerts">Alerts</Nav.Link></button>  
                          <button className="buttons"><Nav.Link className="text-light mr-1" href="#news">News</Nav.Link></button>  
                          <button className="buttons"><Nav.Link className="text-light mr-1" href="#contact">Contact</Nav.Link></button>  
                          
                        </Nav>
                      </ButtonToolbar>
                    </Navbar.Collapse>
                  </Navbar></div>
              </div>
      
    )
  }
}

