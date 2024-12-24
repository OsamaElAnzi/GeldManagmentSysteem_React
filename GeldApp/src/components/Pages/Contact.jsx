import React from "react";
import { Container, Form, Button, Card, Col } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container>
        <h1>Contact</h1>
        <Card>
          <Card.Header>Contact</Card.Header>
          <Card.Body className="d-flex flex-row justify-content-between">
            <Col>
            <Form>
              <Form.Group className="d-flex " controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter name" />{" "}
                <Form.Control type="text" placeholder="Enter phone" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
            `Een leuke quote kan nooit wat kwaad ;)`
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Contact;
