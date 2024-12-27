import React from "react";

function Vermogen({ transactions }) {
  const berekendeVermogen = transactions.reduce((total, transaction) => {
    if (transaction.type === "Inkomsten") {
      return total + transaction.bedrag;
    } else if (transaction.type === "Uitgaven") {
      return total - transaction.bedrag;
    }
    return total;
  }, 0);

  return (
    <>
      <p className="display-6">€{berekendeVermogen.toFixed(2)}</p>
    </>
  );
}

export default Vermogen;
