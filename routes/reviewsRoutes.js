const express = require("express");
const router = express.Router();
const review = require("../controllers/review_controller");

//Route to create a new review
router.post("/saved-reviews", review.addReview);

//when the server receives a GET request to '/'
router.get("/", (req, res) => {
  res.send("Express is running!");
});

router.get("/saved-reviews", review.getReview);

//Routes to update or delete a single review
router.put("/saved-reviews/:id", review.updateReview);
router.delete("/saved-reviews/:id", review.deleteReview);

module.exports = router;
