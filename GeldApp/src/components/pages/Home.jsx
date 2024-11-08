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
            
        </div>
    </div>
  )
}

export default Home
