const express = require("express");

const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({ messg: "Get all Workouts" });
});

//Get a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single workout" });
});

//Post new workout
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new workout" });
});

//Delete new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

//Update new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
