import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// Styles
import './Footer.css';

// I import the Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare

} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faInstagram,
  faFacebookSquare,
  faTwitterSquare
)


export default function Footer(props) {
  
    return (
            
              <div className="footer-wrapper text-white">
                <Form className="subscribe-email float-left">
                                                      
                  <Form.Control className="display-email" type="email" placeholder="Enter your email to subscribe..." />                                                 
                  <Button className="button-email" variant="primary" type="submit">Subscribe</Button>     
                  
                  <label className="mt-5 text-white"><i>Copyright 2019 Weather App.</i></label>
                </Form>
                
                <div className="social-icons float-left">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="weather-icon m-2" />
                  <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="weather-icon m-2" /> 
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="weather-icon m-2" />
                </div>
                
              </div>
              
    );
}