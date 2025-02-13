const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controller/workoutController");
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

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
