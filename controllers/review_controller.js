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

const updateReview = async (req, res) => {
  const { id } = req.params;
  const { text, rating, date_started, date_finished } = req.body;

  try {
    const [updatedReview] = await knex("reviews")
      .where({ id })
      .update({
        text,
        rating,
        date_started: date_started || null,
        date_finished: date_finished || null,
      })
      .returning("*");

    if (!updatedReview) {
      return res.status(404).json({ message: `Review ${id} not found` });
    }

    console.log("Review updated:", updatedReview);
    res.status(200).json(updatedReview);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Error updating review" });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCount = await knex("reviews").where({ id }).del();

    if (!deletedCount) {
      return res.status(404).json({ message: `Review ${id} not found` });
    }

    console.log("Review deleted:", id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ error: "Error deleting review" });
  }
};

module.exports = {
  addReview,
  getReview,
  updateReview,
  deleteReview,
};
