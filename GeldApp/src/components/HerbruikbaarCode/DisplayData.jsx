import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Vermogen } from "./ModalVermogen";

function DisplayData() {
  const [spaardoel, setSpaardoel] = useState(0);
  const [transacties, setTransacties] = useState([]);

  useEffect(() => {
    const savedSpaardoel = localStorage.getItem("spaardoel");
    const savedTransacties = localStorage.getItem("transactions");

    setSpaardoel(savedSpaardoel ? JSON.parse(savedSpaardoel) : 0);
    setTransacties(savedTransacties ? JSON.parse(savedTransacties) : []);
  }, []);

  const totalVermogen = Vermogen({ transactions: transacties });

  const nogTeGaan = spaardoel - totalVermogen;

  return (
    <Container className="py-4">
      <Row className="text-center">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-primary">Vermogen</h3>
              <h4 className="display-6">€{totalVermogen}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-warning">Nog te gaan:</h3>
              <h4 className="display-6">
                €{nogTeGaan > 0 ? nogTeGaan.toFixed(2) : "Doel bereikt!"}
              </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-success">Spaardoel:</h3>
              <h4 className="display-6">€{spaardoel.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayData;
