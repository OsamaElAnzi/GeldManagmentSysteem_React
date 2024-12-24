import React from 'react'
import Grafiek from '../HerbruikbaarCode/Grafiek'
import LijstTransacties from '../HerbruikbaarCode/LijstTransacties'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Container className="d-flex flex-column">
        <Grafiek />
        <LijstTransacties />
      </Container>
    </>
  )
}

export default Home
//hier in zie je wat je huidie status is van je vermogen en wat er in en uit gaat doormiddel van een grafiek zie je hoeveel je in de maand hebt bereikt.
//Hier voeg je ook toe aan wat je binnen hebt gehaald en wat er uit moet gaan doormiddel van een modal.
//