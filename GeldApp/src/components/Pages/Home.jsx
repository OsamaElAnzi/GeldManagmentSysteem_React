import React, { useState } from "react";
import Grafiek from "../HerbruikbaarCode/Grafiek";
import dataInvoerForm from "../HerbruikbaarCode/dataInvoerForm";
import LijstTransacties from "../HerbruikbaarCode/LijstTransacties";
import { Container, Button, Modal, Form } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="d-flex flex-column">
        <Grafiek />
        <Button
          variant="primary"
          className="mt-3"
          onClick={handleShow}
          data-bs-toggle="modal"
        >
          Voeg transactie toe
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <LijstTransacties />
      </Container>
    </>
  );
}

export default Home;
//hier in zie je wat je huidie status is van je vermogen en wat er in en uit gaat doormiddel van een grafiek zie je hoeveel je in de maand hebt bereikt.
//Hier voeg je ook toe aan wat je binnen hebt gehaald en wat er uit moet gaan doormiddel van een modal.
//
