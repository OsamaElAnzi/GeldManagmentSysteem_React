import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

function ModalBiljetten() {
  const [show, setShow] = useState(false);
  const [transacties, setTransacties] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const savedTransacties = localStorage.getItem("transactions");
    setTransacties(savedTransacties ? JSON.parse(savedTransacties) : []);
  }, []);
  function totaalHoeveelheidBiljetten() {
    const totaalInkomen = transacties
      .filter((t) => t.type === "INKOMEN")
      .reduce((sum, t) => {
        const biljetten = parseFloat(t.biljetten) || 0;
        const bedrag = parseFloat(t.bedrag) || 0;
        return sum + (biljetten > 0 ? bedrag / biljetten : 0);
      }, 0);
    const totaalUitgaven = transacties
      .filter((t) => t.type === "UITGAVEN")
      .reduce((sum, t) => {
        const biljetten = parseFloat(t.biljetten) || 0;
        const bedrag = parseFloat(t.bedrag) || 0;
        return sum + (biljetten > 0 ? bedrag / biljetten : 0);
      }, 0);
    return totaalInkomen - totaalUitgaven;
  }
  function EUR5() {
    const EUR5TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 5)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR5TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 5)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR5TellenInkomen - EUR5TellenUitgaven;
  }
  function EUR10() {
    const EUR10TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 10)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR10TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 10)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR10TellenInkomen - EUR10TellenUitgaven;
  }
  function EUR20() {
    const EUR20TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 20)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR20TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 20)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR20TellenInkomen - EUR20TellenUitgaven;
  }
  function EUR50() {
    const EUR50TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 50)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR50TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 50)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR50TellenInkomen - EUR50TellenUitgaven;
  }
  function EUR100() {
    const EUR100TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 100)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR100TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 100)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR100TellenInkomen - EUR100TellenUitgaven;
  }
  function EUR200() {
    const EUR200TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 200)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR200TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 200)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR200TellenInkomen - EUR200TellenUitgaven;
  }
  function EUR500() {
    const EUR500TellenInkomen = transacties
    .filter((t) => t.type === "INKOMEN" && t.biljetten === 500)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    const EUR500TellenUitgaven = transacties
    .filter((t) => t.type === "UITGAVEN" && t.biljetten === 500)
    .reduce((sum, t) => {
      const biljetten = parseFloat(t.biljetten) || 0;
      const bedrag = parseFloat(t.bedrag) || 0;
      return sum + (biljetten > 0? bedrag / biljetten : 0);
    }, 0);
    return EUR500TellenInkomen - EUR500TellenUitgaven;
  }
  return (
    <>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Biljetten
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Biljetten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Soort</th>
                <th>Hoeveelheid Biljetten</th>
              </tr>
              <tr>
                <th>Totaal Hoeveelheid Biljetten</th>
                <th>{totaalHoeveelheidBiljetten()}</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>€5</td>
                    <td>{EUR5()}</td>
                </tr>
                <tr>
                    <td>€10</td>
                    <td>{EUR10()}</td>
                </tr>
                <tr>
                    <td>€20</td>
                    <td>{EUR20()}</td>
                </tr>
                <tr>
                    <td>€50</td>
                    <td>{EUR50()}</td>
                </tr>
                <tr>
                    <td>€100</td>
                    <td>{EUR100()}</td>
                </tr>
                <tr>
                    <td>€200</td>
                    <td>{EUR200()}</td>
                </tr>
                <tr>
                    <td>€500</td>
                    <td>{EUR500()}</td>
                </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBiljetten;
