require("dotenv").config();

const express = require("express");
const app = express();

// Database
require("./database/db");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routers
const bookRoute = require("./routers/book");

// Api
app.use("/api/books", bookRoute);

// Frontend

module.exports = app;
