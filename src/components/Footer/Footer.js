import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './Footer.css';

export default class Footer extends Component {
  
  render() {
    return (  
            <div className="footer-wrapper">
              <Form className="float-top">
                                                    
                <Form.Control className="display-email" type="email" placeholder="Enter your email to subscribe..." />                                                 
                <Button className="button-email" variant="primary" type="submit">Subscribe</Button>     
                
                <div className="copyright-app"><i>Copyright 2019 Weather App.</i></div>
              </Form>
              
              
              
            </div>

      
    );
  }
}

