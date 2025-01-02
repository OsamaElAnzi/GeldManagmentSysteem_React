import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

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
        (result) => {
          setAlert({ type: "success", message: "Email verstuurd!" });
          form.current.reset();
        },
        (error) => {
          setAlert({ type: "danger", message: "Er is iets misgegaan!" });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact</h1>
      <Card className="shadow">
        <Card.Body>
          {alert && (
            <Alert
              variant={alert.type}
              onClose={() => setAlert(null)}
              dismissible
            >
              {alert.message}
            </Alert>
          )}
          <Form ref={form} onSubmit={emailVersturen}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email Adres</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Voer uw email adres in"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone" className="mb-3">
              <Form.Label>Telefoonnummer</Form.Label>
              <Form.Control
                type="tel"
                name="user_phone"
                placeholder="Voer uw telefoonnummer in"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage" className="mb-3">
              <Form.Label>Bericht</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Voer uw bericht in"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Ik ga akkoord met de privacyregels"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Verzenden..." : "Verzenden"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;