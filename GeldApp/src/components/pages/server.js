// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB-verbinding
mongoose.connect("mongodb://localhost:27017/transactionsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definieer het schema voor een transactie
const transactionSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// API-routes
app.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/transactions", async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start de server
app.listen(PORT, () => console.log(`Server draait op poort ${PORT}`));
