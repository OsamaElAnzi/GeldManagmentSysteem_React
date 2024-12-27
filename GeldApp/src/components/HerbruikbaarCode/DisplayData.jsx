import React, { useEffect, useState } from "react";
import Vermogen from "./Vermogen";
import NogTeGaan from "./NogTeGaan";
import { Spaardoel } from "./ModalSpaarDoel";
import { Container, Row, Col, Card } from "react-bootstrap";

function DisplayData({ transactions = [] }) {
  const [spaardoel, setSpaardoel] = useState("");

  useEffect(() => {
    const savedSpaardoel = localStorage.getItem("spaardoel");
    setSpaardoel(savedSpaardoel ? JSON.parse(savedSpaardoel) : "");
  }, []);

  const berekendeVermogen = transactions.reduce((total, transaction) => {
    if (transaction.type === "Inkomsten") {
      return total + transaction.bedrag;
    } else if (transaction.type === "Uitgaven") {
      return total - transaction.bedrag;
    }
    return total;
  }, 0);

  const remainingAmount = spaardoel ? spaardoel - berekendeVermogen : null;

  return (
    <Container className="py-4">
      <Row className="text-center">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-primary">Vermogen</h3>
              <Vermogen transactions={transactions} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-warning">Nog te gaan:</h3>
              <NogTeGaan remainingAmount={remainingAmount} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-success">Spaardoel:</h3>
              <h4 className="fw-bold">
                <Spaardoel spaardoel={spaardoel} />
              </h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayData;
