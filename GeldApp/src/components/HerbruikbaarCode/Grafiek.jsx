import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const Grafiek = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const getData = () => {
    return transactions.map(transaction => ({
      date: new Date(transaction.datum),
      inkomen: transaction.type === 'INKOMEN' ? transaction.bedrag : 0,
      uitgaven: transaction.type === 'UITGAVEN' ? transaction.bedrag : 0,
    }));
  };

  const [options, setOptions] = useState({
    data: [],
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "inkomen",
        yName: "Inkomen",
      },
      {
        type: "line",
        xKey: "date",
        yKey: "uitgaven",
        yName: "Uitgaven",
      },
    ],
    axes: [
      {
        position: "bottom",
        type: "time",
        title: {
          text: "Datum",
        },
      },
      {
        position: "left",
        type: "number",
        title: {
          text: "Bedrag in Euro",
        },
      },
    ],
  });

  useEffect(() => {
    setOptions(prevOptions => ({
      ...prevOptions,
      data: getData(),
    }));
  }, [transactions]);

  return <AgCharts options={options} />;
};

export default Grafiek;