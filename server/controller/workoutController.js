const Workout = require("../models/workoutModal");

//get all workouts

//get single workout

//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  //add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete workout

//update workout

module.exports = {
  createWorkout,
};
