import React from 'react'

function LijstTransacties() {
    // Deze component zal een lijst met transacties laten zien

    // Voorbeeld data
    const transacties = [
      { id: 1, datum: '15-02-2022', type: 'Inkomen', bedrag: 500 },
      { id: 2, datum: '16-02-2022', type: 'Uitgaven', bedrag: 200 },
      { id: 3, datum: '17-02-2022', type: 'Inkomen', bedrag: 600 },
    ]

    return (
        <>
            <h2>Transacties</h2>
            <table>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Type</th>
                        <th>Bedrag</th>
                    </tr>
                </thead>
                <tbody>
                    {transacties.map((transactie) => (
                        <tr key={transactie.id}>
                            <td>{transactie.datum}</td>
                            <td>{transactie.type}</td>
                            <td>€{transactie.bedrag.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default LijstTransacties