import React, { useEffect, useState } from "react";
import Grafiek from "../HerbruikbaarCode/Grafiek";
import DisplayData from "../HerbruikbaarCode/DisplayData";
import LijstTransacties from "../HerbruikbaarCode/LijstTransacties";
import { Container, Button, Modal, Form, Alert } from "react-bootstrap";

function getDate() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${date}/${month}/${year}`;
}

function Home() {
  const [show, setShow] = useState(false);
  const [bedrag, setBedrag] = useState("");
  const [soort, setSoort] = useState("");
  const [omschrijving, setOmschrijving] = useState("");
  const [biljetten, setBiljetten] = useState("");
  const [aantalBiljetten, setAantalBiljetten] = useState(0);
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    resetForm();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const resetForm = () => {
    setBedrag("");
    setSoort("");
    setOmschrijving("");
    setBiljetten("");
    setAantalBiljetten(0);
    setErrorMessage("");
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedBiljet = parseInt(biljetten);
    const parsedBedrag = parseFloat(bedrag);
    function countAmountBiljetten(parsedBedrag, parsedBiljet) {
      return Math.floor(parsedBedrag / parsedBiljet);
    }
    if (isNaN(parsedBedrag) || parsedBedrag <= 0) {
      setErrorMessage("Bedrag moet een positief getal zijn.");
      return;
    }
    if (omschrijving.trim().length < 3) {
      setErrorMessage("Omschrijving moet minstens 3 karakters lang zijn.");
      return;
    }
    const newTransaction = {
      id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
      datum: getDate(),
      type: soort,
      bedrag: parsedBedrag,
      omschrijving,
      biljetten: parsedBiljet,
      aantalBiljetten: countAmountBiljetten(parsedBedrag, parsedBiljet)
    };

    setTransactions([...transactions, newTransaction]);
    handleClose();
    window.location.reload();
  };

  return (
    <Container className="d-flex flex-column">
      <DisplayData />
      <Grafiek />
      <Button
        variant="primary"
        className="mt-3"
        onClick={handleShow}
        data-bs-toggle="modal"
      >
        Voeg transactie toe
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Voeg Transactie Toe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicBedrag">
              <Form.Control
                type="number"
                placeholder="Bedrag"
                min="1"
                max="1000000000"
                value={bedrag}
                onChange={(e) => setBedrag(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSoortTransactie">
              <Form.Select
                value={soort}
                onChange={(e) => setSoort(e.target.value)}
                required
              >
                <option value="" hidden>
                  Soort transactie
                </option>
                <option>INKOMEN</option>
                <option>UITGAVEN</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOmschrijving">
              <Form.Control
                type="text"
                placeholder="Omschrijving"
                maxLength={30}
                value={omschrijving}
                onChange={(e) => setOmschrijving(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSoortBiljetten">
              <Form.Select
                value={biljetten}
                onChange={(e) => setBiljetten(e.target.value)}
              >
                <option hidden>Soort biljetten</option>
                <option value={5}>5 EUR</option>
                <option value={10}>10 EUR</option>
                <option value={20}>20 EUR</option>
                <option value={50}>50 EUR</option>
                <option value={100}>100 EUR</option>
                <option value={200}>200 EUR</option>
                <option value={500}>500 EUR</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!bedrag || !soort || !omschrijving}
            >
              Toevoegen
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text>Voeg hier je inkomen of uitgaven aan toe.</Form.Text>
        </Modal.Footer>
      </Modal>

      <LijstTransacties transacties={transactions} />
    </Container>
  );
}

export default Home;
