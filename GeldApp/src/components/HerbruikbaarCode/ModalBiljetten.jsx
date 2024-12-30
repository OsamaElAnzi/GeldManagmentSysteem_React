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
  function EUR5() {
    const biljet = transacties.filter((t) => t.biljetten === 5);
    const ids = biljet.map((t) => t.id);
     
  }
  function EUR10() {}
  function EUR20() {}
  function EUR50() {}
  function EUR100() {}
  function EUR200() {}
  function EUR500() {}
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
            </thead>
            <tbody>
                <tr>
                    <td>€5</td>
                    <td>{EUR5()}</td>
                </tr>
                <tr>
                    <td>€10</td>
                    <td>EUR10</td>
                </tr>
                <tr>
                    <td>€20</td>
                    <td>EUR20</td>
                </tr>
                <tr>
                    <td>€50</td>
                    <td>EUR50</td>
                </tr>
                <tr>
                    <td>€100</td>
                    <td>EUR100</td>
                </tr>
                <tr>
                    <td>€200</td>
                    <td>EUR200</td>
                </tr>
                <tr>
                    <td>€500</td>
                    <td>EUR500</td>
                </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBiljetten;
