const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/config/db");
const logger = require("./app/middleware/logger");
const notFound = require("./app/middleware/notFound");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get("/", (req, res) => {
    res.send("Inventory API is Running");
});

app.get("/health", (req, res) => {
    res.json({ status: "Server is healthy and running" });
});

app.use("/items", require("./app/routes/itemRoutes"));

// 404 Handler
app.use(notFound);

module.exports = app;
