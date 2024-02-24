const express = require("express");
const router = express.Router();
const review = require("../controllers/review_controller");

//Route to create a new review
router.post("/saved-reviews", review.addReview);
//when the server receives a GET request to '/'
router.get("/", (req, res) => {
  res.send("Express is running!");
});

// create API endpoint with POST request

// app.post("/saved-reviews", function (req, res) {
//   const { authorName, bookTitle, text, rating } = req.body;
//   // res.send("POST request to /");

//   //Create a new review object
//   const newReview = {
//     authorName,
//     bookTitle,
//     text,
//     rating,
//     createdAt: new Date(),
//   };

//   //Add new review to the savedReviews array
//   savedReviews.push(newReview);

//   //Send "success" response
//   res
//     .status(201)
//     .json({ message: "Review saved successfully", review: newReview });
// });

module.exports = router;
