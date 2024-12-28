import React from "react";
import { Alert, Table, Container } from "react-bootstrap";

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

  const total = Vermogen({ transactions: sortedTransactions })? Vermogen({ transactions: sortedTransactions }) : 0;

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
              <td>{transactie.datum}</td>
              <td>{transactie.type}</td>
              <td
              className={transactie.type === "INKOMEN"? "text-success" : "text-danger"}
              >
                €{transactie.bedrag.toFixed(2)}
              </td>
              <td>{transactie.biljetten || "Onbekend"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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
  return totalSaldo.toFixed(2);
}

export default LijstTransacties;
