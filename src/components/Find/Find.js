import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  
  render() {
    return (
      
      <Form id="find">
        <Form.Control type="text" placeholder="Find your location..." /> 
        <Button>Search</Button>
        
      </Form>
      
    );
  }
}

