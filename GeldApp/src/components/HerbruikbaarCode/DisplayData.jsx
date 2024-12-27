import React, { useEffect, useState } from "react";
import { Spaardoel } from "./ModalSpaarDoel";
import Vermogen from "./Vermogen";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

function DisplayData({ transactions }) {
  const [spaardoel, setSpaardoel] = useState("");

  useEffect(() => {
    const savedSpaardoel = localStorage.getItem("spaardoel");
    setSpaardoel(savedSpaardoel ? JSON.parse(savedSpaardoel) : "");
  }, []);

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
              <h4 className="fw-bold">$400,000</h4>
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
