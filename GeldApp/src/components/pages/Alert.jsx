import React from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onClose} className="alert-close-btn">
          Sluiten
        </button>
      </div>
    </div>
  );
};

export default Alert;
