import React from "react";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 text-primary">Contacteer Ons</h1>
      <Card className="shadow border-0">
        <Card.Header className="bg-primary text-white text-center py-3">
          <h3 className="mb-0">Neem contact met ons op</h3>
        </Card.Header>
        <Card.Body className="p-4">
          <Row>
            <Col md={6} className="border-end pe-md-4">
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formName">
                      <Form.Label>Volledige Naam</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Voer je volledige naam in"
                        className="rounded-0"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Telefoonnummer</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Voer je telefoonnummer in"
                        className="rounded-0"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Emailadres</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Voer je emailadres in"
                    className="rounded-0"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Bericht</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Schrijf je bericht hier"
                    className="rounded-0"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 rounded-0"
                >
                  Verstuur Bericht
                </Button>
              </Form>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center text-center bg-light"
            >
              <div className="p-3">
                <h5 className="text-secondary mb-3">Onze gegevens</h5>
                <p className="mb-1">
                  <strong>Adres:</strong> Example Street 123, 1000 AA Amsterdam
                </p>
                <p className="mb-1">
                  <strong>Telefoon:</strong> +31 20 123 4567
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> contact@voorbeeld.nl
                </p>
                <hr className="my-4" />
                <blockquote className="blockquote text-muted">
                  <p className="mb-0">
                    "Goede communicatie is de sleutel tot succes."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Zakelijk advies
                  </footer>
                </blockquote>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
