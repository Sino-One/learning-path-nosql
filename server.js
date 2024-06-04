const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const authRoute = require("./Routes/AuthRoutes");
var bodyParser = require("body-parser");

mongoose
  .connect("mongodb://127.0.0.1:27017/learning-path-db")
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json());

app.use("/", authRoute);
