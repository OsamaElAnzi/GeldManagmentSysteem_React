import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className="container">
        <div className="overzichtKaart">
            <div className="lijstUitgaven">
                {/* hier genereert het die colommen */}

                <h3>Uitgaven</h3>
                <table>
                    <tr>
                        <th>Datum</th>
                        <th>Bedrag</th>
                        <th>Beschrijving</th>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>���250</td>
                        <td>Bekijk</td>
                    </tr>
                </table>
            </div>
            <div className="lijstInkomen">
                {/* hier genereert het die colommen */}
                <h3>Inkomsten</h3>
                <table>
                    <tr>
                        <th>Datum</th>
                        <th>Bedrag</th>
                        <th>Beschrijving</th>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>���250</td>
                        <td>Bekijk</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="inputKaart">
            <h1>Voer je Inkomen of Uitgaven!</h1>
            <div className="form-group">
                <label for='Inkomen_Uitgaven_Input'>Inkomen/Uitgaven</label>
                <div className="inputArea">
                    <h4>€</h4>
                    <input type='text' className='form-control' placeholder="Bedrag" name="Inkomen_Uitgaven_Input"/>
                </div>
                <button type="submit" name='bedragDoorGegeven'>Verstuur</button>
            </div>
            <div className="huidigeToestand">
            <div className="form-group">
                <label for='Inkomen_Uitgaven_Input'>Inkomen/Uitgaven</label>
                <div className="inputArea">
                    <h4>€</h4>
                    <input type='text' disabled className='form-control' placeholder="Bedrag" name="Inkomen_Uitgaven_Input"/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
