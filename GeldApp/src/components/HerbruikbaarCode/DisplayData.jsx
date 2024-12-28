import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { calculateSaldo, sortTransactions } from "./utils";

function DisplayData({ transactions = [] }) {
  const [spaardoel, setSpaardoel] = useState("");

  useEffect(() => {
    const savedSpaardoel = localStorage.getItem("spaardoel");
    setSpaardoel(savedSpaardoel ? JSON.parse(savedSpaardoel) : "");
  }, []);

  const sortedTransactions = sortTransactions(transactions);
  const total = calculateSaldo(sortedTransactions);
  const nogTeGaan = spaardoel ? (spaardoel - total).toFixed(2) : "N/A";

  return (
    <Container className="py-4">
      <Row className="text-center">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-primary">Vermogen</h3>
              <h4 className="fw-bold">€{total}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-warning">Nog te gaan:</h3>
              <h4 className="fw-bold">€{nogTeGaan}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-success">Spaardoel:</h3>
              <h4 className="fw-bold">€{spaardoel || "Onbekend"}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayData;
