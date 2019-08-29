import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cityCountry: 'Buenos Aires, AR'
    
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.cityCountry.value);
    
    this.props.onCityChange(e.currentTarget.cityCountry.value);
    
    
  }
 

  render() {
    console.log(isNaN(this.props.cityCountry));
    return (
      <div>
        <Form onSubmit={this.handleSubmit} id="find-wrapper">
          
          <Form.Control className="input-find" name="cityCountry" placeholder="Find your location... e.g.: Resistencia, AR" autoFocus />
          <Button className="button-find" variant="primary" type="submit">
            Find
          </Button>
        </Form>
        <div>
        { this.props.errorStatus &&
          <div className="w-50 alert alert-warning alertBar" role="alert">
            "Attention! This city don't exit"
          </div>
        } 
        </div>    
      </div>

    );
  }
}

