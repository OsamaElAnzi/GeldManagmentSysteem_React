import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";

function Help() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Zoeken naar: ${query}`);
    // Voeg zoekfunctionaliteit hier toe
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Help & Ondersteuning</h1>

      {/* Zoeken Sectie */}
      <Row className="mb-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Zoek naar hulp"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSearch}>
            Zoek
          </Button>
        </Col>
      </Row>

      {/* Veelgestelde Vragen (FAQ) */}
      <Row className="mb-4">
        <Col>
          <Accordion>
            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hoe reset ik mijn wachtwoord?</Accordion.Header>
                <Accordion.Body>
                  Om je wachtwoord te resetten, klik je op de 'Wachtwoord vergeten' link op de inlogpagina en volg je de stappen om een nieuw wachtwoord in te stellen.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Wat moet ik doen als ik technische problemen ondervind?</Accordion.Header>
                <Accordion.Body>
                  Als je technische problemen ondervindt, probeer dan eerst je browser te vernieuwen of de cache te wissen. Als het probleem blijft, neem dan contact op met onze klantenservice.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Hoe kan ik mijn profiel bewerken?</Accordion.Header>
                <Accordion.Body>
                  Ga naar de instellingenpagina en klik op 'Profiel bewerken' om je gegevens bij te werken.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Col>
      </Row>

      {/* Contactinformatie Sectie */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Contacteer Ons</Card.Title>
              <Card.Text>
                Als je vraag niet beantwoord wordt in de veelgestelde vragen, neem dan gerust contact met ons op:
              </Card.Text>
              <ul>
                <li><strong>Email:</strong> support@jouwdomein.com</li>
                <li><strong>Telefoon:</strong> +123 456 789</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Extra Bronnen Sectie */}
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Extra Bronnen</Card.Title>
              <Card.Text>
                Bekijk onze gidsen en tutorials om meer te leren:
              </Card.Text>
              <ul>
                <li><a href="/tutorial1">Hoe gebruik je onze applicatie?</a></li>
                <li><a href="/tutorial2">Geavanceerde instellingen uitleg</a></li>
                <li><a href="/tutorial3">Veelgestelde technische vragen</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Help;
