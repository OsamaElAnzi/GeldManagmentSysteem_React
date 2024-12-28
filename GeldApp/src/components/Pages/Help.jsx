import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Help() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Zoeken naar: ${query}`);
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Help & Ondersteuning</h1>

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
      <Row className="mb-4">
        <Col>
          <Accordion>
            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hoe stel ik mijn spaardoel in?</Accordion.Header>
                <Accordion.Body>
                  Om je spaardoel in te stellen ga naar <br/>
                    1.Dashboard<br />
                    2.Settings<br/>
                    3.(Knop) Stel spaardoel in<br/>
                    4.Spaardoel Instellen`.<br/>
                  ALs je deze navigatie kunt volgen dan vind je hoe je het instelt.
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Wat moet ik doen als ik technische problemen ondervind?</Accordion.Header>
                <Accordion.Body>
                  Hier volgen de oplossingen die wellicht je probleem kunne oplossen.<br />
                  1. Herstart de applicatie<br/>
                  2. Check de Console via F12(inspecteren)<br/>
                  3. Neem contact op met <NavLink to="/contact">onze support</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Card>

            <Card className="shadow-sm mb-3">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Hoe kan ik aanpassingen brengen bij verkeerde ingevoerde transacties?</Accordion.Header>
                <Accordion.Body>
                  Ga naar de instellingenpagina en klik op 'Vermogen' om je gegevens bij te werken.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Contacteer Ons</Card.Title>
              <Card.Text>
                Als je vraag niet beantwoord wordt in de veelgestelde vragen, neem dan gerust contact met ons op:
              </Card.Text>
              <ul>
                <li><strong>Email:</strong> osamaelanzi0@gmail.com</li>
                <li><strong>WhatsApp:</strong>+31 6 85493708</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
