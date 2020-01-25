import React, { Component } from 'react';
import { Form, Col, InputGroup, Button, Row } from 'react-bootstrap';
import axios from 'axios';

import "./Contact.css";

// Hook component
export default class Contact extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      firstname: '',
      lastname: '',
      phone: 0,
      birth: '',
      address: '',
      city: '',
      state: '',
      country: '',
      email: '',
      users: []
    }
  }


  componentDidMount() {
    this.getUsers();
  }


  getUsers = async () => {
    const res = await axios.get('/api/users');

    this.setState({
      users: res.data
    });
  }

  
  handleSubmit = async (e) => {
    
    e.persist();
    const form = e.currentTarget;
    
    await axios.post('/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      birth: this.state.birth,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      email: this.state.email
    });

    this.setState({
      firstname: '', 
      lastname: '', 
      phone: 0,
      birth: '',
      address: '',
      city: '',
      state: '',
      country: '',
      email: ''
    });
    this.getUsers();

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ validated: true });
  };

  onChange = e => {
    const { name, value } = e.target;


    this.setState({
      [name]: value
    })
  }


  /* componentWillUnmount() {
    this.setState({
      validated: false
    });
  } */



   render() { 

      return (<div className="contact-wrapper">
                <div className="m-5">
                  <h1>You can suscribe to our website</h1>
                </div>

                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={e => this.handleSubmit(e)}
                  className="w-75 m-auto p-5"
                >
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        onChange={this.onChange}
                        name="firstname"
                        value={this.state.firstname}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Surname"
                        onChange={this.onChange}
                        name="lastname"
                        value={this.state.lastname}
                      />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Phone"
                        onChange={this.onChange} 
                        name="phone"
                        value={this.state.phone}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  
                  <Form.Row>
                    <Form.Group as={Col} md="2" controlId="validationCustom03">
                      <Form.Label>Date of birth</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Date"
                        onChange={this.onChange}
                        name="birth"
                        value={this.state.birth}
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control 
                        placeholder="1234 Main St"
                        name="address"
                        onChange={this.onChange}
                        value={this.state.address} 
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="City" 
                        name="city"
                        onChange={this.onChange}
                        value={this.state.city}
                        required 
                        />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>State</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="State"
                        onChange={this.onChange}
                        name="state"
                        value={this.state.state} 
                        required 
                        />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
        
                      <Form.Label>Country</Form.Label>
                        <select 
                          className="custom-select"
                          name="country"
                          value={this.state.country}
                          onChange={this.onChange}
                        >
                        <option >Open select menu</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                      </select>
                    </Form.Group>
                  </Form.Row>
              
                  <Form.Row>
                    <Form.Group as={Col} md="5" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        required/>
                    </Form.Group>
                    
                  </Form.Row>
                  
                  <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>What kind of information would you like to get by email?</Form.Label>
                    {['checkbox'].map(type => (
                      <div key={`custom-${type}`} className="mb-3">
                        <Form.Check 
                          custom
                          type={type}
                          id={`1-${type}`}
                          label={`Alerts`}
                        />
                        <Form.Check 
                          custom
                          type={type}
                          id={`2-${type}`}
                          label={`5 day each 3 hour forecast`}
                        />
                        <Form.Check 
                          custom
                          type={type}
                          id={`3-${type}`}
                          label={`News`}
                        />
                      </div>
                    ))}
                    
                </Form.Group>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                
                  <Button type="submit">Submit form</Button>
                </Form>
              </div>
    );
  
}
}