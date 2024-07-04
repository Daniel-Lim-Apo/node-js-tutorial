const express = require("express");
const router = express.Router();

// Sample route
router.get("/", (req, res) => {
  res.send("Hello, world! Everything is good!");
});

// Route that intentionally throws an error
router.get("/BadEndPoint", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500;
  next(error); // Pass the error to the error-handling middleware
});

module.exports = router;
