const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Post new workout
router.post("/", createWorkout);

//Delete new workout
router.delete("/:id", deleteWorkout);

//Update new workout
router.patch("/:id", updateWorkout);

module.exports = router;
