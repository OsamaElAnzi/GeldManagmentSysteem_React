import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function ModalTaal() {

  return (
    <>
      <Card className="shadow">
        <Card.Header className="text-primary text-center display-6">
          Taal
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
            Kies hier de taal voor je applicatie.
          </Card.Text>
          <select className="form-select w-100 rounded-0">
            <option value="nl">Nederlands</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">اللغة العربية</option>
            <option value="es">Español</option>
          </select>
          <Button
            variant="primary"
            className="w-100 mt-3"
          >
            Opslaan
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ModalTaal;
