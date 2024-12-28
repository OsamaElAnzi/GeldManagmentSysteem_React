import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Grafiek from "../HerbruikbaarCode/Grafiek";
import DisplayData from "../HerbruikbaarCode/DisplayData";
import LijstTransacties from "../HerbruikbaarCode/LijstTransacties";
import TransactionForm from "../HerbruikbaarCode/TransactionForm";

function getDate() {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${date}/${month}/${year}`;
}

function Home() {
  const [show, setShow] = useState(false);
  const [bedrag, setBedrag] = useState("");
  const [soort, setSoort] = useState("");
  const [omschrijving, setOmschrijving] = useState("");
  const [biljetten, setBiljetten] = useState("");
  const [transactions, setTransactions] = useState(() => {
    try {
      const savedTransactions = localStorage.getItem("transactions");
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    } catch (e) {
      console.error("Error loading transactions from localStorage:", e);
      return [];
    }
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
    setErrorMessage("");
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedBedrag = parseFloat(bedrag);

    if (isNaN(parsedBedrag) || parsedBedrag <= 0) {
      setErrorMessage("Bedrag moet een positief getal zijn.");
      return;
    }
    if (omschrijving.trim().length < 3) {
      setErrorMessage("Omschrijving moet minstens 3 karakters lang zijn.");
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      datum: getDate(),
      type: soort,
      bedrag: parsedBedrag,
      omschrijving,
      biljetten,
    };

    setTransactions([...transactions, newTransaction]);
    handleClose();
  };

  return (
    <Container className="d-flex flex-column">
      <DisplayData />
      <Grafiek />
      <Button variant="primary" className="mt-3" onClick={handleShow}>Voeg transactie toe</Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Voeg Transactie Toe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            bedrag={bedrag}
            setBedrag={setBedrag}
            soort={soort}
            setSoort={setSoort}
            omschrijving={omschrijving}
            setOmschrijving={setOmschrijving}
            biljetten={biljetten}
            setBiljetten={setBiljetten}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Form.Text className="text-muted">
            Voeg hier je inkomen of uitgaven aan toe.
          </Form.Text>
        </Modal.Footer>

      </Modal>

      <LijstTransacties transacties={transactions} />
    </Container>
  );
}

export default Home;
