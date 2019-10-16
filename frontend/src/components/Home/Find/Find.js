import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.onCityChange(e.currentTarget.cityCountry.value);
  }
 

  render() {

    return (  <div>

                <Form onSubmit={this.handleSubmit} id="find-wrapper">
                  
                  <Form.Control className="input-find" name="cityCountry" placeholder="Find your location... e.g.: Resistencia, AR" autoFocus />
                  <Button className="button-find" variant="primary" type="submit">
                    Find
                  </Button>
                </Form>

                <div>
                { this.props.errorStatus &&
                  <div className="alert-bar w-50 alert alert-warning" role="alert">
                    "Attention! This city don't exit"
                  </div>
                } 
                </div>    
              </div>
    );
  }
}

