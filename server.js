//initialize Express in project
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let savedReviews = [];

//when the server receives a GET request to '/'
app.get("/", (req, res) => {
  res.send("Express is running!");
});

//can change this in the future:
app.get("/greeting", (req, res) => {
  res.send("Hello World");
});

//create API endpoint with POST request

app.post("/saved-reviews", function (req, res) {
  const { userId, bookId, text, rating } = req.body;
  // res.send("POST request to /");

  //Create a new review object
  const newReview = {
    userId,
    bookId,
    text,
    rating,
    createdAt: new Date(),
  };

  //Add new review to the savedReviews array
  savedReviews.push(newReview);

  //Send "success" response
  res
    .status(201)
    .json({ message: "Review saved successfully", review: newReview });
});

//start Express on port 8080
app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
  console.log("Press CTRL + C to stop server");
});
