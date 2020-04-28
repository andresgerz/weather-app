import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import './Find.css';

class Find extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cityCountry: ''
    }
  }
 

  onChange = (e) => {
    this.setState({ cityCountry: e.target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.searchCityCountry(this.state.cityCountry);
    this.setState({ cityCountry: '' });
  }
 

  render() {

    return (  <div>

                <Form onSubmit={this.handleSubmit} id="find-wrapper">
                  
                  <Form.Control 
                    className="input-find" 
                    name="cityCountry" 
                    placeholder="e.g.: Resistencia, AR" 
                    onChange={this.onChange}
                    value={this.state.cityCountry}
                    autoFocus />
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

export default connect(null, actions)(Find);