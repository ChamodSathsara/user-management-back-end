const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// instance of express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// export module
module.exports = app;
