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
                        placeholder="Last name"
                        defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                  
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>

                  <Button type="submit">Submit form</Button>
                </Form>
              </div>
    );
  }
}