const knex = require("knex")(require("../knexfile"));

const addReview = async (req, res) => {
  const { body } = req;
  console.log("Adding review:", body);

  try {
    const [newReview] = await knex("reviews").insert(body).returning("*");
    console.log("Review added:", newReview);
    return res.status(201).json(newReview);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: `Error getting reviews ${error}` });
  }
};

const getReview = async (req, res) => {
  try {
    // Fetch reviews from "reviews" table
    const reviewData = await knex("reviews");
    if (!reviewData.length) {
      return res.status(404).json({ message: "No reviews found" });
    }

    // Send review data in the response
    res.status(200).json(reviewData);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

module.exports = {
  addReview,
  getReview,
};
