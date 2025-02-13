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

// Rest APIs

// getAPI
app.get("/users", (req, res) => {
  controller.getUsers((req, res, next) => {
    res.send();
  });
});

// post Api
app.post("/createuser", (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send();
  });
});

// update Api
app.put("/updateuser", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

// delete Api
app.get("/deleteuser", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

// export module
module.exports = app;
