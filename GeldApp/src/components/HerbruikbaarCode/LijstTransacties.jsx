import React, { useState } from "react";
import {
  Alert,
  Container,
  Button,
  Accordion,
  Modal,
  Form,
} from "react-bootstrap";

function LijstTransacties({ transacties = [] }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newAmount, setNewAmount] = useState("");
  const [newOmschrijving, setNewOmschrijving] = useState("");
  const [newSoortTransactie, setNewSoortTransactie] = useState("");

  if (transacties.length === 0) {
    return (
      <Container className="text-center mt-4">
        <Alert variant="info">Er zijn nog geen transacties.</Alert>
      </Container>
    );
  }

  const sortedTransactions = [...transacties].sort(
    (a, b) => new Date(a.datum) - new Date(b.datum)
  );

  function handleDelete(event) {
    const id = parseInt(event.target.value);
    const updatedTransactions = transacties.filter((t) => t.id !== id);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    window.location.reload();
  }

  function handleOpenEditModal(transactie) {
    setSelectedTransaction(transactie);
    setNewAmount(transactie.bedrag.toFixed(2));
    setNewOmschrijving(transactie.omschrijving);
    setNewSoortTransactie(transactie.type);
    setShowEditModal(true);
  }

  function handleSaveEdit() {
    const id = selectedTransaction.id;
    const updatedTransaction = {
      ...selectedTransaction,
      bedrag: parseFloat(newAmount),
      omschrijving: newOmschrijving,
      type: newSoortTransactie,
    };
    const updatedTransactions = transacties.map((t) =>
      t.id === id ? updatedTransaction : t
    );
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setShowEditModal(false);
    window.location.reload();
  }

  return (
    <Container className="mt-4 bg-primary text-white pt-4 rounded">
      <h2 className="text-center mb-4 p-0">Transacties</h2>
      <div className="table-responsive p-0">
        <div className="table-header">
          <div className="d-flex justify-content-between pb-3">
            <div className="w-50 h4">Datum</div>
            <div className="w-50 h4">Type</div>
            <div className="w-50 h4">Bedrag</div>
            <div className="w-50 h4">Acties</div>
          </div>
        </div>
        <Accordion>
          {sortedTransactions.map((transactie) => (
            <Accordion.Item
              eventKey={transactie.id.toString()}
              key={transactie.id}
              className="p-0 bg-light "
              style={{ padding: 0 }}
            >
              <Accordion.Header className="pe-4">
                <div
                  className="d-flex justify-content-between w-100 bg-light"
                  style={{ padding: 0 }}
                >
                  <div className="w-25 p-0">
                    {new Date(transactie.datum).toLocaleDateString()}
                  </div>
                  <div className="w-25 p-0">{transactie.type}</div>
                  <div
                    className={`w-25 ${
                      transactie.type === "INKOMEN"
                        ? "text-success"
                        : "text-danger"
                    }`}
                    style={{ padding: 0 }}
                  >
                    {transactie.type === "INKOMEN" ? "+" : "-"}€
                    {transactie.bedrag.toFixed(2)}
                  </div>
                  <div className="w-25 p-0">
                    <Button
                      variant="danger"
                      value={transactie.id}
                      onClick={handleDelete}
                      className="me-2"
                    >
                      Verwijderen
                    </Button>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => handleOpenEditModal(transactie)}
                    >
                      Aanpassen
                    </Button>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>Biljet Soort:</strong>{" "}
                  {transactie.biljetten || "Onbekend"}
                </p>
                <p>
                  <strong>Aantal Biljetten:</strong>{" "}
                  {transactie.aantalBiljetten || "Onbekend"}
                </p>
                <p>
                  <strong>Omschrijving:</strong>{" "}
                  {transactie.omschrijving || "Geen omschrijving"}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Transactie Aanpassen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newAmount">
              <Form.Label>Nieuw Bedrag</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newSoortTransactie">
              <Form.Label>Nieuw Soort Transactie</Form.Label>
              <Form.Select
                value={newSoortTransactie}
                onChange={(e) => setNewSoortTransactie(e.target.value)}
                required
              >
                <option>INKOMEN</option>
                <option>UITGAVEN</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newOmschrijving">
              <Form.Label>Nieuw Omschrijving</Form.Label>
              <Form.Control
                type="text"
                value={newOmschrijving}
                onChange={(e) => setNewOmschrijving(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveEdit}>
            Opslaan
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export function Vermogen({ transactions = [] }) {
  const totalInkomen = transactions
    .filter((t) => t.type === "INKOMEN")
    .reduce((sum, t) => sum + t.bedrag, 0);

  const totalUitgaven = transactions
    .filter((t) => t.type === "UITGAVEN")
    .reduce((sum, t) => sum + t.bedrag, 0);

  const totalSaldo = totalInkomen - totalUitgaven;
  return <span>€{totalSaldo.toFixed(2)}</span>;
}

export default LijstTransacties;
