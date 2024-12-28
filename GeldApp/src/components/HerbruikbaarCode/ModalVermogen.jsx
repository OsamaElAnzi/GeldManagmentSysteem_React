import React from "react";
import LijstTransacties from "./LijstTransacties";
import { Modal, Button } from "react-bootstrap";

function ModalVermogen({ transacties = [] }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Toon Vermogen
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transacties Overzicht</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LijstTransacties transacties={transacties} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sluiten
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalVermogen;
