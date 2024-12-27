import React from 'react';
import { Alert, Table, Container } from 'react-bootstrap';

function LijstTransacties({ transacties }) {
  if (transacties.length === 0) {
    return (
      <Container className="text-center mt-4">
        <Alert variant="info">
          Er zijn nog geen transacties.
        </Alert>
      </Container>
    );
  }
  const sortedTransactions = [...transacties].sort((a, b) => new Date(a.datum) - new Date(b.datum));
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Transacties</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Datum</th>
            <th>Type</th>
            <th>Bedrag</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transactie) => (
            <tr key={transactie.id}>
              <td>{transactie.datum}</td>
              <td>{transactie.type}</td>
              <td>€{transactie.bedrag.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LijstTransacties;
