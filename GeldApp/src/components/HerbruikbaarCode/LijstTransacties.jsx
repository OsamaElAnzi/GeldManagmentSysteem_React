import React from "react";
import { Alert, Table, Container } from "react-bootstrap";
import { calculateSaldo, sortTransactions } from "./utils";

function LijstTransacties({ transacties = [] }) {
  if (transacties.length === 0) {
    return (
      <Container className="text-center mt-4">
        <Alert variant="info">Er zijn nog geen transacties.</Alert>
      </Container>
    );
  }

  const sortedTransactions = sortTransactions(transacties);
  const total = calculateSaldo(sortedTransactions);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Transacties</h2>
      <h4 className="text-center">
        Totaal Saldo: <span className="text-success">€{total}</span>
      </h4>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Datum</th>
            <th>Type</th>
            <th>Bedrag</th>
            <th>BiljetSoort</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transactie) => (
            <tr key={transactie.id}>
              <td>{new Date(transactie.datum).toLocaleDateString("nl-NL")}</td>
              <td>{transactie.type}</td>
              <td>€{transactie.bedrag.toFixed(2)}</td>
              <td>{transactie.biljetten || "Onbekend"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LijstTransacties;
