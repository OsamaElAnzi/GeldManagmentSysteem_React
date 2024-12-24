import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const Grafiek = () => {
  // Define getData function or replace with actual data
  const getData = () => {
    // Return your data here
    return [
      { date: new Date(2019, 0, 1), inkomen: 120, uitgaven: 130 },
      { date: new Date(2019, 6, 1), inkomen: 140, uitgaven: 150 },
      { date: new Date(2019, 11, 31), inkomen: 130, uitgaven: 140 },
    ];
  };

  const [options, setOptions] = useState({
    data: getData(),
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "inkomen",
        yName: "inkomen",
      },
      {
        type: "line",
        xKey: "date",
        yKey: "uitgaven",
        yName: "uitgaven",
      },
    ],
    axes: [
      {
        position: "bottom",
        type: "time",
        title: {
          text: "Date",
        },
        crossLines: [
          {
            type: "range",
            range: [new Date(2019, 4, 1), new Date(2019, 6, 1)],
            strokeWidth: 0,
            fill: "#7290C4",
            fillOpacity: 0.4,
            label: {
              text: "Price Peak",
              position: "top",
              fontSize: 14,
            },
          },
        ],
      },
      {
        position: "left",
        type: "number",
        title: {
          text: "Price in pence",
        },
        crossLines: [
          {
            type: "line",
            value: 142.45,
            stroke: "#7290C4",
            lineDash: [6, 12],
            label: {
              text: "142.4",
              position: "right",
              fontSize: 12,
              color: "#000000",
            },
          },
          {
            type: "line",
            value: 133.8,
            stroke: "#7290C4",
            lineDash: [6, 12],
            label: {
              text: "133.8",
              position: "right",
              fontSize: 12,
              color: "#01c185",
            },
          },
          {
            type: "line",
            value: 135.35,
            stroke: "#D21E75",
            lineDash: [2, 4],
            label: {
              text: "135.3",
              position: "right",
              fontSize: 12,
              color: "#000000",
            },
          },
          {
            type: "line",
            value: 123.97,
            stroke: "#D21E75",
            lineDash: [2, 4],
            label: {
              text: "124.0",
              position: "right",
              fontSize: 12,
              color: "#01c185",
            },
          },
        ],
      },
    ],
  });

  return <AgCharts options={options} />;
};

export default Grafiek;