const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./CrudApp/Routes/users");

const url = "mongodb://localhost/users";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.on("open", function () {
  console.log("connected");
});

app.listen(9000, function () {
  console.log("server is running ");
});
