import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  
  render() {
    return (
      
      <Form id="find-wrapper">
        
        <Form.Control className="input-find" placeholder="Find your location..." />
               
        <Button className="button-find" variant="primary" type="submit">
          Find
        </Button>
      </Form>


    );
  }
}

