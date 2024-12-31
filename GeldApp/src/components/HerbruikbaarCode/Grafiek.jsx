import React, { useEffect, useState } from "react";
import { Gauge } from "@mui/x-charts";
import { Typography, Box } from "@mui/material";

const Grafiek = () => {
  const [transactions, setTransactions] = useState([]);
  const [spaardoel, setSpaardoel] = useState(0);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    const savedSpaardoel = localStorage.getItem("spaardoel");
    if (savedTransactions && savedSpaardoel) {
      setTransactions(JSON.parse(savedTransactions));
      setSpaardoel(JSON.parse(savedSpaardoel));
    }
  }, []);

  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.bedrag, 0);
  const percentageSpaardoel = spaardoel > 0 ? (totalAmount / spaardoel) * 100 : 0;
  const percentageSpaardoelDisplay = parseFloat(percentageSpaardoel.toFixed(2));
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        Spaardoel Vooruitgang
      </Typography>
      <Gauge
        width={300}
        height={200}
        value={percentageSpaardoelDisplay}
        startAngle={-90}
        endAngle={90}
        sx={{
          "& .MuiGauge-valueText": {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1976d2",
          },
        }}
      />
      <Typography variant="body1" mt={2}>
        {percentageSpaardoel.toFixed(2)}% van je doel bereikt
      </Typography>
    </Box>
  );
};

export default Grafiek;
