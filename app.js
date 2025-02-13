const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// import Controller
const controller = require("./controller");

// instance of express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Rest APIs (this have 2 get APIs)
app.get("/users", (req, res) => {
  controller.getUsers((users) => {
    res.send(users);
  });
});

app.get("/user", (req, res) => {
  const id = req.body.id;
  controller.getUserById((id, user) => {
    res.send(user);
  });
});

// export module
module.exports = app;
