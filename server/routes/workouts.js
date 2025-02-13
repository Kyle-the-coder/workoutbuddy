const express = require("express");
const { createWorkout } = require("../controller/workoutController");
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
router.post("/", createWorkout);

//Delete new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

//Update new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
