import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button, Alert, Card, Col, Row } from "react-bootstrap";

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailVersturen = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_u4by93o",
        "template_yyl1wok",
        form.current,
        "FAX_q-rpkU_WhLRjx"
      )
      .then(
        () => {
          setAlert({ type: "success", message: "Email succesvol verstuurd!" });
          form.current.reset();
        },
        () => {
          setAlert({ type: "danger", message: "Er is iets misgegaan. Probeer opnieuw." });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Container className="my-5 vh-100">
      <Card className="shadow border-0">
        <Card.Header className="bg-primary text-white text-center py-4">
          <h1 className="mb-0">Neem Contact Op</h1>
        </Card.Header>
        <Card.Body className="bg-contact">
          <Row className="align-items-center">
            {/* Contact Form */}
            <Col md={6} className="px-4">
              <h3 className="mb-4 text-primary">Stuur ons een bericht</h3>
              {alert && (
                <Alert
                  variant={alert.type}
                  onClose={() => setAlert(null)}
                  dismissible
                  className="mb-4"
                >
                  {alert.message}
                </Alert>
              )}
              <Form ref={form} onSubmit={emailVersturen}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Emailadres</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Voer uw emailadres in"
                    required
                    className="rounded-0"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone" className="mb-3">
                  <Form.Label>Telefoonnummer</Form.Label>
                  <Form.Control
                    type="tel"
                    name="user_phone"
                    placeholder="Voer uw telefoonnummer in"
                    required
                    className="rounded-0"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicMessage" className="mb-3">
                  <Form.Label>Bericht</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Uw bericht"
                    required
                    className="rounded-0"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Ik ga akkoord met de privacyvoorwaarden"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 rounded-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Verzenden"}
                </Button>
              </Form>
            </Col>

            <Col md={6} className="px-4">
              <div className="border-start ps-4">
                <h3 className="mb-3 text-primary">Contactgegevens</h3>
                <p>
                  Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op via het
                  onderstaande formulier of gebruik onze directe contactgegevens.
                </p>
                <p>
                  <strong>Email:</strong> osamaelanzi0@gmail.com
                </p>
                <p>
                  <strong>Telefoon:</strong> 06-12345678
                </p>
                <p>
                  <strong>Openingstijden:</strong>
                </p>
                <ul>
                  <li>Maandag - Donderdag: 09:00 - 18:00</li>
                  <li>Vrijdag: 16:00 - 20:00</li>
                </ul>
                <blockquote className="blockquote">
                  <p className="mb-0 fst-italic text-secondary">
                    "Communicatie is de sleutel tot succes."
                  </p>
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
