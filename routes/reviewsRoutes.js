const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//Route to create a new review
router.post("/reviews", async (req, res) => {
  try {
    const { userId, bookId, text, rating } = req.body;
    const newReview = await Review.create({ userId, bookId, text, rating });
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
