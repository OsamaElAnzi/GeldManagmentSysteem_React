import React from "react";
import ModalSpaarDoel from "../HerbruikbaarCode/ModalSpaarDoel";
import ModalVermogen from "../HerbruikbaarCode/ModalVermogen";
import { Card, Container, Row, Col } from "react-bootstrap";

function Settings() {
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
              <ModalVermogen />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
