import React, { useEffect, useState } from "react";
import ModalSpaarDoel from "../HerbruikbaarCode/ModalSpaarDoel";
import ModalVermogen from "../HerbruikbaarCode/ModalVermogen";
import { Card, Container, Row, Col, Button, Alert } from "react-bootstrap";

function Settings() {
  const [transacties, setTransacties] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
  useEffect(() => {
    const savedTransacties = localStorage.getItem("transactions");
    setTransacties(savedTransacties ? JSON.parse(savedTransacties) : []);
  }, []);
  const handleReset = () => {
    localStorage.removeItem("transactions");
    setTransacties([]);
    setShowError(true);
    setErrorMessage("Transacties zijn gereset.");
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }
  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Instellingen</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Header className="bg-success text-white text-center display-6">
              Jouw spaardoel
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Hier kan je je spaardoel bewerken of resetten.
              </Card.Text>
              <ModalSpaarDoel />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header className="bg-primary text-white text-center display-6">
              Jouw vermogen
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Hier kan je je vermogen inzien en bewerken.
              </Card.Text>
              <ModalVermogen transacties={transacties} />
              <Button
              variant="warning"
              className="w-100 mt-3"
              onClick={handleReset}>
                Reset
              </Button>
              {showError && <Alert variant="success" className="mt-3">{errorMessage}</Alert>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
