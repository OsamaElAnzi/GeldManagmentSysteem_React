function TransactionForm({
  bedrag,
  setBedrag,
  soort,
  setSoort,
  omschrijving,
  setOmschrijving,
  biljetten,
  setBiljetten,
  errorMessage,
  handleSubmit,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicBedrag">
        <Form.Control
          type="number"
          placeholder="Bedrag"
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
          <option>5 EUR</option>
          <option>10 EUR</option>
          <option>20 EUR</option>
          <option>50 EUR</option>
          <option>100 EUR</option>
          <option>200 EUR</option>
          <option>500 EUR</option>
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
  );
}
export default TransactionForm;