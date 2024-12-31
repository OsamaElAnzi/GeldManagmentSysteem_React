import React from "react";
import { Alert, Container, Button, Accordion } from "react-bootstrap";

function LijstTransacties({ transacties = [] }) {
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
    window.location.reload(); // Refresh the page to show updated transactions
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Transacties</h2>
      <div className="table-responsive">
        <div className="table">
          <div className="table-header  border text-white">
            <div className="d-flex justify-content-between p-2">
              <div className="w-25">Datum</div>
              <div className="w-25">Type</div>
              <div className="w-25">Bedrag</div>
              <div className="w-25">Acties</div>
            </div>
          </div>
          <Accordion>
            {sortedTransactions.map((transactie) => (
              <Accordion.Item eventKey={transactie.id.toString()} key={transactie.id}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100">
                    <div className="w-25">
                      {new Date(transactie.datum).toLocaleDateString()}
                    </div>
                    <div className="w-25">{transactie.type}</div>
                    <div
                      className={`w-25 ${
                        transactie.type === "INKOMEN" ? "text-success" : "text-danger"
                      }`}
                    >
                      {transactie.type === "INKOMEN" ? "+" : "-"}€
                      {transactie.bedrag.toFixed(2)}
                    </div>
                    <div className="w-25">
                      <Button
                        variant="danger"
                        value={transactie.id}
                        onClick={handleDelete}
                        className="me-2"
                      >
                        Verwijderen
                      </Button>
                      <Button variant="warning">Aanpassen</Button>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p><strong>Biljet Soort:</strong> {transactie.biljetten || "Onbekend"}</p>
                  <p><strong>Aantal Biljetten:</strong> {transactie.aantalBiljetten || "Onbekend"}</p>
                  <p><strong>Omschrijving:</strong> {transactie.omschrijving || "Geen omschrijving"}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
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
