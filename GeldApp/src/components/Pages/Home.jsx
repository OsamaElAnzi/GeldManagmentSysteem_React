import React, { useState } from "react";
import Grafiek from "../HerbruikbaarCode/Grafiek";
import DisplayData from "../HerbruikbaarCode/DisplayData";
import LijstTransacties from "../HerbruikbaarCode/LijstTransacties";
import { Container, Button, Modal, Form } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="d-flex flex-column">
        <DisplayData />
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
              <Form.Group className="mb-3" controlId="formBasicBedrag">
                <Form.Control type="text" placeholder="Bedrag" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSoortTransactie">
                <Form.Select>
                    <option>Soort transactie</option>
                    <option>INKOMEN</option>
                    <option>UITGAVEN</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicOmschrijving">
                <Form.Control type="text" placeholder="Omschrijving" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSoortBiljetten">
                <Form.Select>
                    <option>Soort biljetten</option>
                    <option>5 EUR</option>
                    <option>10 EUR</option>
                    <option>20 EUR</option>
                    <option>50 EUR</option>
                    <option>100 EUR</option>
                    <option>200 EUR</option>
                    <option>500 EUR</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Toevoegen
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Form.Text>
                Voeg hier je inkomen of uitgaven aan toe.
            </Form.Text>
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
