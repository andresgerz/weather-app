import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './Find.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
  }
 

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.onCityChange(e.currentTarget.cityCountry.value);
  }
 

  render() {

    return (  <div>

                <Form onSubmit={this.handleSubmit} id="find-wrapper">
                  
                  <Form.Control className="input-find" name="cityCountry" placeholder="e.g.: Resistencia, AR" autoFocus />
                  <Button className="button-find" variant="primary" type="submit">
                    Find
                  </Button>
                </Form>

                <div className="alert-wrapper">
                { this.props.errorStatus &&
                  <div className="alert-bar alert alert-warning" role="alert">
                    "Attention! This city don't exit"
                  </div>
                } 
                </div>
                    
              </div>
    );
  }
}

