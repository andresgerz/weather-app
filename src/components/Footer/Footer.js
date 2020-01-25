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
            
              <React.Fragment className="footer-wrapper text-white">
                <div className="copyright float-left">                                       
                  <p className="text-white"><i>Copyright 2019 Weather App.</i></p>
                </div>

                <div className="social-icons float-left">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="weather-icon m-2" />
                  <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="weather-icon m-2" /> 
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="weather-icon m-2" />
                </div>
                
              </React.Fragment>
              
    );
}