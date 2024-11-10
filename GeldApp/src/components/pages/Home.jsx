import React, { useState } from "react";
import "./Home.css";
import Alert from "./Alert";

function Home() {
  const [formData, setFormData] = useState({
    type: "",
    amount: "",
    category: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const calculateBalance = () => {
    let balance = 0;
    transactions.forEach((trans) => {
      const amount = parseFloat(trans.amount);
      if (trans.type === "inkomen") {
        balance += amount;
      } else if (trans.type === "uitgaven") {
        balance -= amount;
      }
    });
    return balance.toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setTransactions((prevTransactions) => [...prevTransactions, formData]);
      setShowAlert(true);
    } catch (error) {
      console.error("Fout bij het opslaan van data", error);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      {showAlert && <Alert message="Gelukt" onClose={closeAlert} />}

      <div className="overzichtKaart">
        {/* Tabel voor Uitgaven */}
        <div className="lijstUitgaven">
          <h3>Uitgaven</h3>
          <table>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Bedrag</th>
                <th>Beschrijving</th>
              </tr>
            </thead>
            <tbody>
              {transactions
                .filter((trans) => trans.type === "uitgaven")
                .map((trans, index) => (
                  <tr key={index}>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>€{trans.amount}</td>
                    <td>{trans.category}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="lijstInkomen">
          <h3>Inkomsten</h3>
          <table>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Bedrag</th>
                <th>Beschrijving</th>
              </tr>
            </thead>
            <tbody>
              {transactions
                .filter((trans) => trans.type === "inkomen")
                .map((trans, index) => (
                  <tr key={index}>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>€{trans.amount}</td>
                    <td>{trans.category}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="inputKaart">
        <h1>Voer je Inkomen of Uitgaven in!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="type">Wat voor inkomen is het?</label>
            <div className="inputArea2">
              <input
                type="radio"
                id="inkomen"
                value="inkomen"
                name="type"
                onChange={handleChange}
              />
              <label htmlFor="inkomen" className="toggle-button">
                Inkomen
              </label>
              <input
                type="radio"
                id="uitgaven"
                value="uitgaven"
                name="type"
                onChange={handleChange}
              />
              <label htmlFor="uitgaven" className="toggle-button">
                Uitgaven
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Bedrag</label>
            <div className="inputArea">
              <h4>€</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Type..."
                name="amount"
                onChange={handleChange}
              />
            </div>
            <select
              id="categorie"
              name="category"
              required
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Categorie</option>
              <option value="vasteLasten">Vaste lasten</option>
              <option value="boodschappen&huishouden">Boodschappen & huishouden</option>
              <option value="investering">Investering</option>
              <option value="Restaurants">Restaurants</option>
              <option value="winkel">Winkel</option>
              <option value="vervoer">Vervoer</option>
            </select>
            <button type="submit" name="bedragDoorGegeven">
              Verstuur
            </button>
          </div>
        </form>

        <div className="huidigeToestand">
          <div className="form-group">
            <label htmlFor="Inkomen_Uitgaven_Input">Inkomen/Uitgaven</label>
            <div className="inputArea">
              <h4>€</h4>
              <input
                type="text"
                disabled
                className="form-control"
                value={calculateBalance()}
                name="Inkomen_Uitgaven_Input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
