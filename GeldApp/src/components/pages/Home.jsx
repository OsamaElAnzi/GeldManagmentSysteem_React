import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <div className="overzichtKaart">
        <div className="lijstUitgaven">
          <h3>Uitgaven</h3>
          <table>
            <tr>
              <th>Datum</th>
              <th>Bedrag</th>
              <th>Beschrijving</th>
            </tr>
            <tr>
              {/* hier genereert het die colommen */}
              <td></td>
              <td></td>
              {/* dit word een knop */}
              <td></td>
            </tr>
          </table>
        </div>
        <div className="lijstInkomen">
          <h3>Inkomsten</h3>
          <table>
            <tr>
              <th>Datum</th>
              <th>Bedrag</th>
              <th>Beschrijving</th>
            </tr>
            <tr>
              {/* hier genereert het die colommen */}
              <td></td>
              <td></td>
              {/* dit word een knop */}
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="inputKaart">
        <h1>Voer je Inkomen of Uitgaven!</h1>
        <form method="post" action="">
          <div className="form-group">
            <label for="inkomenSoort">Wat voor inkomen is het?</label>
            <div className="inputArea2">
              <input
                type="radio"
                id="inkomen"
                value="inkomen"
                name="inkomenSoort"
              />
              <label for="inkomen" className="toggle-button">
                Inkomen
              </label>

              <input
                type="radio"
                id="uitgaven"
                value="uitgaven"
                name="inkomenSoort"
              />
              <label for="uitgaven" className="toggle-button">
                Uitgaven
              </label>
            </div>
          </div>
          <div className="form-group">
            <label for="Inkomen_Uitgaven_Input">Bedrag</label>
            <div className="inputArea">
              <h4>€</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Type..."
                name="Inkomen_Uitgaven_Input"
              />
            </div>
            <br />
            <select id="categorie">
              <option value="">Categorie</option>
              <option value="vasteLasten">Vaste lasten</option>
              <option value="boodschappen&huishouden">
                Boodschappen & huishouden
              </option>
              <option value="investering">Investering</option>
              <option value="Restaurants">Restaurants</option>
              <option value="winkel">Winkel</option>
              <option value="vervoer">Vervoer</option>
            </select>
            <br />
            <button type="submit" name="bedragDoorGegeven">
              Verstuur
            </button>
          </div>
        </form>
        <div className="huidigeToestand">
          <div className="form-group">
            <label for="Inkomen_Uitgaven_Input">Inkomen/Uitgaven</label>
            <div className="inputArea">
              <h4>€</h4>
              <input
                type="text"
                disabled
                className="form-control"
                value=""
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
