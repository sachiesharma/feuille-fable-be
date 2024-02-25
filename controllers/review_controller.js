const knex = require("knex")(require("../knexfile"));

const addReview = async (req, res) => {
  const { body } = req;

  try {
    const [id] = await knex("reviews").insert(body);
    const newReview = await knex("reviews").where("id", id).first();
    return res.status(201).json(newReview);
  } catch (error) {
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
