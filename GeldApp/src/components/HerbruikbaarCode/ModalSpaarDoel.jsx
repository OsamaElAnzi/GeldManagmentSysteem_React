import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

function ModalSpaarDoel() {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [update, setUpdate] = useState("");
  const [spaardoel, setSpaardoel] = useState(() => {
    const savedSpaardoel = localStorage.getItem("spaardoel");
    return savedSpaardoel ? JSON.parse(savedSpaardoel) : "";
  });

  useEffect(() => {
    localStorage.setItem("spaardoel", JSON.stringify(spaardoel));
  }, [spaardoel]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRest = () => {
    setSpaardoel("")
    setUpdate("Spaardoel gereset");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedSpaardoel = parseFloat(spaardoel);
    if (isNaN(parsedSpaardoel) || parsedSpaardoel <= 0) {
      setErrorMessage("Voer een geldig positief getal in als spaardoel.");
      return;
    }
    setUpdate("Spaardoel ingesteld.");
    setErrorMessage("");
    setSpaardoel(parsedSpaardoel);
    handleClose();
  };

  return (
    <>
      <Button variant="success" className="w-100 mb-3" onClick={handleShow}>
        Stel Spaar Doel In
      </Button>
      <Button variant="warning" type="submit" className="w-100" onClick={handleRest}>
        Reset
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Spaardoel instellen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicSpaardoel" className="mb-3">
              <Form.Label>Voer je spaar doel in</Form.Label>
              <Form.Control
                type="number"
                placeholder="Bijvoorbeeld: 1000"
                value={spaardoel}
                onChange={(e) => setSpaardoel(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary" className="w-100" type="submit">
                Opslaan
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text>Stel een financieel doel voor je spaargeld.</Form.Text>
        </Modal.Footer>
      </Modal>

      <DisplaySpaarDoelSettings
        spaardoel={spaardoel}
        update={update}
        setUpdate={setUpdate}
      />
    </>
  );
}

function DisplaySpaarDoelSettings({ spaardoel, update, setUpdate }) {
  useEffect(() => {
    if (update) {
      const timer = setTimeout(() => {
        setUpdate("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [update, setUpdate]);

  return (
    <div className="mt-3 text-center">
      <h5>Huidig Spaar Doel:</h5>
      <Spaardoel spaardoel={spaardoel} />
      {update && <Alert variant="success">{update}</Alert>}
    </div>
  );
}

export function Spaardoel({ spaardoel }) {
  return (
    <div>
      <h4 className="display-6">
        {spaardoel ? `€${spaardoel.toFixed(2)}` : "Geen spaardoel"}
      </h4>
    </div>
  );
}

export default ModalSpaarDoel;
