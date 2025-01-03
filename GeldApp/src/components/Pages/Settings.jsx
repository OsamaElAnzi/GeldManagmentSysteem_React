import React, { useEffect, useState } from "react";
import ModalSpaarDoel from "../HerbruikbaarCode/ModalSpaarDoel";
import ModalVermogen from "../HerbruikbaarCode/ModalVermogen";
import ModalBiljetten from "../HerbruikbaarCode/ModalBiljetten";
import ModalTaal from "../HerbruikbaarCode/ModalTaal";
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
      window.location.reload();
    }, 3000);
  };
  return (
    <Container className="py-4 vh-100">
      <h3 className="text-center mb-4">Instellingen</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card className="shadow border-0">
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
          <Card className="shadow border-0">
            <Card.Header className="bg-primary text-white text-center display-6">
              Jouw vermogen
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Hier kan je je vermogen inzien en je transactie lijst.
              </Card.Text>
              <ModalVermogen transacties={transacties} />
              <Button
                variant="warning"
                className="w-100 mt-3"
                onClick={handleReset}
              >
                Reset
              </Button>
              {showError && (
                <Alert variant="success" className="mt-3">
                  {errorMessage}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow border-0">
            <Card.Header className="bg-info text-white text-center display-6">
              Biljetten Overzicht
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Hier kan je je biljetten overzicht inzien.
              </Card.Text>
              <ModalBiljetten />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow border-0">
            <Card.Header className="bg-dark text-white text-center display-6">
              Statistieken
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-center">
                Bekijk hier een samenvatting van je financiën.
              </Card.Text>
              <ul>
                <li>
                  Totaal Inkomsten: €
                  {transacties
                    .filter((t) => t.type === "INKOMEN")
                    .reduce((sum, t) => sum + t.bedrag, 0)
                    .toFixed(2)}
                </li>
                <li>
                  Totaal Uitgaven: €
                  {transacties
                    .filter((t) => t.type === "UITGAVEN")
                    .reduce((sum, t) => sum + t.bedrag, 0)
                    .toFixed(2)}
                </li>
                <li>
                  Saldo: €
                  {transacties
                    .reduce(
                      (sum, t) =>
                        t.type === "INKOMEN" ? sum + t.bedrag : sum - t.bedrag,
                      0
                    )
                    .toFixed(2)}
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <ModalTaal />
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
