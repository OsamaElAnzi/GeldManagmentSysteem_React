import React from "react";

function Vermogen({ transactions }) {
  const berekendeVermogen = transactions.reduce(
    (total, transaction) => total + transaction.bedrag,
    0
  );

  return (
    <>
      <h1>Vermogen</h1>
      <h2>€{berekendeVermogen.toFixed(2)}</h2>
    </>
  );
}

export default Vermogen;
