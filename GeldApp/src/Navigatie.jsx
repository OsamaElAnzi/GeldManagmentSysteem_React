import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

function Navigatie() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>GeldApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 justify-content-center justify-content-lg-around">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#about">Over ons</Nav.Link>
            <Nav.Link href="#settings">Instellingen</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigatie;
