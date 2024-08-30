// route/review.js

const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review"); // Ensure correct path

// console.log('Review Controller:', reviewController);

router.post('/post', reviewController.createReview); // Ensure createReview is defined
router.get('/reviews',reviewController.getAllReviews);


module.exports = router;
