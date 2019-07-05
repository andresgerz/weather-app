import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

// Styles
import './Footer.css';

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

export default class Footer extends Component {
  
  render() {
    return (  
            <div className="footer-wrapper">
              <Form className="float-left w-50">
                                                    
                <Form.Control className="display-email" type="email" placeholder="Enter your email to subscribe..." />                                                 
                <Button className="button-email" variant="primary" type="submit">Subscribe</Button>     
                
                <div className="copyright-app"><i>Copyright 2019 Weather App.</i></div>
              </Form>
              
              <div className="ml-5">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="weather-icon" /> | |
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="weather-icon" /> | |
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="weather-icon" />
              </div>
              
            </div>

      
    );
  }
}

