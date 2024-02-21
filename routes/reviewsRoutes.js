const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//Route to create a new review
router.post("/reviews", async (req, res) => {
  try {
    const { userId, bookId, text, rating } = req.body;
    const review = new Review({ userId, bookId, text, rating });
    await review.save();
    res
      .status(201)
      .json({ success: true, message: "Review created successfully" });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
