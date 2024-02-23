const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//Route to create a new review
router.post("/saved-reviews", async (req, res) => {
  try {
    const { userId, bookId, text, rating } = req.body;
    //validate?:

    //create review in the database using knex
    const newReview = await Review.create({ userId, bookId, text, rating });

    //redirect to the SavedReviewsPage:
    res.redirect("/saved-reviews");
    // res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
