const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// URI
const uri =
  "mongodb+srv://chamodsathsara450:1998chamod@chamod.ohiz5.mongodb.net/?retryWrites=true&w=majority&appName=chamod";

// Connect funtion
const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected mongoose");
  } catch (error) {
    console.log("not Connected to Mongoose : ", error);
  }
};
connect();

const router = require("./router");
app.use("/api", router);

// server
const port = 3002;
const host = "localhost";
const server = app.listen(port, host, () => {
  console.log("Server is runing", port);
});
