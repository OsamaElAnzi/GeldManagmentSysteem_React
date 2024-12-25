import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Settings() {
  const handleReset = () => {
    // Voeg je resetlogica hier toe
    alert("Instellingen zijn gereset!");
  };

  const handleNotificationSettings = () => {
    // Voeg je logica voor notificaties in of uit zetten toe
    alert("Notificaties aangepast!");
  };

  const handleAccountSettings = () => {
    // Voeg je logica voor accountinstellingen toe
    alert("Accountinstellingen gewijzigd!");
  };

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Instellingen</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Reset Instellingen Card */}
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-primary">Reset Instellingen</Card.Title>
              <Card.Text className="text-center">
                Zet alle instellingen terug naar de standaardinstellingen.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="danger" onClick={handleReset}>
                  Reset Instellingen
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Notificatie-instellingen Card */}
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-info">Notificaties</Card.Title>
              <Card.Text className="text-center">
                Beheer je notificatievoorkeuren en meldingen.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleNotificationSettings}>
                  Pas Notificaties aan
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Accountinstellingen Card */}
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-success">Accountinstellingen</Card.Title>
              <Card.Text className="text-center">
                Beheer je accountgegevens en wachtwoordinstellingen.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="success" onClick={handleAccountSettings}>
                  Account Instellingen
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Extra Instellingen Card */}
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-warning">Extra Instellingen</Card.Title>
              <Card.Text className="text-center">
                Pas extra instellingen aan, zoals privacy en taal.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="warning">Pas Extra Instellingen aan</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
