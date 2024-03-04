const express = require("express");
const app = express();

// Routers

const bookRoute = require("./routers/book");

// Api

app.use("/api/books", bookRoute);

// Frontend

module.exports = app;
