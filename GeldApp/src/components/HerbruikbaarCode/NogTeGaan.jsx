import React from "react";

function NogTeGaan({ remainingAmount }) {
  return (
    <p className="display-6">
      {remainingAmount !== null
        ? `€${remainingAmount.toFixed(2)}`
        : "Geen spaardoel ingesteld"}
    </p>
  );
}

export default NogTeGaan;
