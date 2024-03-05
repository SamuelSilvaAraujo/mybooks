require("dotenv").config();

const express = require("express");
const app = express();

// Database
require("./database/db");

// Routers
const bookRoute = require("./routers/book");

// Api
app.use("/api/books", bookRoute);

// Frontend

module.exports = app;
