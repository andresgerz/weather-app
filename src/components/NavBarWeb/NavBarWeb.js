import React, { Component } from 'react';
import { Nav, Navbar, ButtonToolbar, Button } from 'react-bootstrap';

import './NavBarWeb.css';

export default class NavBarWeb extends Component {
  
  render() {
    return (  <div id="navbar-wrapper" className="w-100 bg-dark">

                <div className="float-left m-5 text-light"><strong>Weather App</strong></div>

                <div className="options float-right m-5">
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <ButtonToolbar>
                        <Nav className="mr-auto">
                          <Button className="bg-dark border-dark"><Nav.Link className="text-light mr-1" href="#home">Home</Nav.Link></Button>  
                          <Button className="bg-dark border-dark"><Nav.Link className="text-light mr-1" href="#maps">Maps</Nav.Link></Button>  
                          <Button className="bg-dark border-dark"><Nav.Link className="text-light mr-1" href="#alerts">Alerts</Nav.Link></Button>  
                          <Button className="bg-dark border-dark"><Nav.Link className="text-light mr-1" href="#news">News</Nav.Link></Button>  
                          <Button className="bg-dark border-dark"><Nav.Link className="text-light mr-1" href="#contact">Contact</Nav.Link></Button>  
                          
                        </Nav>
                      </ButtonToolbar>
                    </Navbar.Collapse>
                  </Navbar></div>
              </div>
      
    )
  }
}

