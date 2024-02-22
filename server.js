//initialize Express in project
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//when the server receives a GET request to '/'
app.get("/", (req, res) => {
  res.send("Express is running!");
});

//can change this in the future:
app.get("/greeting", (req, res) => {
  res.send("Hello World");
});

//create API endpoint with POST request
//change this to review page??
app.post("/", function (req, res) {
  res.send("POST request to /");
  //...code that does something
});

//start Express on port 8080
app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
  console.log("Press CTRL + C to stop server");
});
