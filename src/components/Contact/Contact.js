import React, { Component } from 'react';
import { Form, Col, InputGroup, Button, Row } from 'react-bootstrap';

export default class Contact extends Component {
 
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (  <div>
                <div className="m-5">
                  <h1>You can suscribe in own website</h1>
                </div>

                <Form
                  noValidate
                  validated={validated}
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
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Surname"
                        defaultValue="Smith"
                      />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Phone"
                        defaultValue="011-0000-0000"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
             
                  </Form.Row>
                  
                  <Form.Row>
                    <Form.Group as={Col} md="2" controlId="validationCustom03">
                      <Form.Label>Date of birth</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        placeholder="Date"
                        defaultValue="DD/MM/YYYY"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
        
                      <Form.Label>Country</Form.Label>
                      <select class="custom-select">
                        <option selected>Open this select menu</option>
                        <option value="1">Argentina</option>
                        <option value="2">Bolivia</option>
                        <option value="3">Brasil</option>
                        <option value="4">Chile</option>
                        <option value="5">Colombia</option>
                        <option value="6">Ecuador</option>
                        <option value="7">Paraguay</option>
                        <option value="8">Peru</option>
                        <option value="9">Uruguay</option>
                        <option value="10">Venezuela</option>
                      </select>
                    </Form.Group>
                  </Form.Row>
              
                  <Form.Row>
                    <Form.Group as={Col} md="5" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    
                  </Form.Row>
                  
                  <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>What king of information would you like to get by email?</Form.Label>
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