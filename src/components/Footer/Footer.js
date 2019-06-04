import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './Footer.css';

export default class Footer extends Component {
  
  render() {
    return (  <div className="footer-wrapper">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address
                      
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Button variant="primary" type="submit">Submit</Button>
                   
                  </Form.Group>
                
                 
                  
                </Form>
      
              </div>

      
    );
  }
}

