import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigatie from './Navigatie.jsx';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div id="NavBarPlek">
        <Navigatie />
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="container">
            {/* dit word een table achtig rij */}
            <div className="row">
              <div className="col">
              <h1>Uitageven</h1><br />
                <div className="row">
                  <h5>Datum</h5>
                  <h5>Bedrag</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>Uitageven</h1><br />
                <div className="row">
                  <h5>Datum</h5>
                  <h5>Bedrag</h5>
                </div>
              </div>
            </div>
          </div>
          {/* uiteindelijk komt hier die punten voor paging */}
          {/* tot hier */}
          <div className="container">
            <h1>Voer je inkomen Of uitgaven!</h1>
            <div className="row">
              <div className="col">
                <form>
                  <div className="form-group bg-dark">
                    <label for='Inkomen_Uitgaven_Input'>Inkomen/Uitgaven</label>
                    <input type='text' className='form-control bg-light.bg-gradient' id='Inkomen_Uitgaven_Input' name="Inkomen_Uitgaven_Input"/>
                  </div>
                </form>

              </div>
            </div>
          </div>
      </div>
  </div>
    </>
  )
}

export default App
