import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { calculateSaldo } from "./utils";

function ModalVermogen({ transacties = [] }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const vermogenTotaal = calculateSaldo(transacties);

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
          <h4>Totaal Vermogen: €{vermogenTotaal}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sluiten
          </Button>
        </Modal.Footer>
      </Modal>
      <h2>Vermogen: €{parseFloat(vermogenTotaal).toLocaleString()}</h2>
    </div>
  );
}

export default ModalVermogen;
