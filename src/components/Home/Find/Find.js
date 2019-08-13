import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      city: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.city.value);
    this.props.onCityChange(e.currentTarget.city.value);
  }

  

  render() {
    console.log(this.state.city);

    return (
      
      <Form onSubmit={this.handleSubmit} id="find-wrapper">
        
        <Form.Control className="input-find" name="city" placeholder="Find your location..." />
        <Button className="button-find" variant="primary" type="submit">
          Find
        </Button>
      </Form>


    );
  }
}

