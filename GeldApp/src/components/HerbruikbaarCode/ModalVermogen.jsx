import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function calculateTotal(transactions = []) {
  const totalInkomen = transactions
    .filter((t) => t.type === "INKOMEN")
    .reduce((sum, t) => sum + t.bedrag, 0);

  const totalUitgaven = transactions
    .filter((t) => t.type === "UITGAVEN")
    .reduce((sum, t) => sum + t.bedrag, 0);

  return (totalInkomen - totalUitgaven).toFixed(2);
}

function ModalVermogen({ transacties = [] }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sortedTransactions = [...transacties].sort(
    (a, b) => new Date(a.datum) - new Date(b.datum)
  );

  const totalSaldo = calculateTotal(sortedTransactions);

  return (
    <div>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Toon Vermogen
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transacties Overzicht</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">
            Totaal Saldo: <span className="text-success">€{totalSaldo}</span>
          </h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Type</th>
                <th>Bedrag</th>
                <th>Biljetten</th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transactie) => (
                <tr key={transactie.id}>
                  <td>{transactie.datum}</td>
                  <td>{transactie.type}</td>
                  <td>€{transactie.bedrag.toFixed(2)}</td>
                  <td>{transactie.biljetten || "Onbekend"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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

export function Vermogen({ transactions = [] }) {
  return calculateTotal(transactions);
}

export default ModalVermogen;
