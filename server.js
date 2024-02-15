//initialize Express in project
const express = require("express");
const app = express();

//when the server receives a GET request to '/'
app.get("/", (req, res) => {
  res.send("Express is running!");
});

//can change this in the future:
app.get("/greeting", (req, res) => {
  res.send("Hello World");
});

//create API endpoint with POST request
app.post("/endpoint", function (req, res) {
  //...code that does something
});

//start Express on port 8080
app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
  console.log("Press CTRL + C to stop server");
});
