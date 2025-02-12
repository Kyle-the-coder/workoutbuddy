require("dotenv").config();
const express = require("express");
const router = require("./routes/workouts");

const app = express();
const workoutRoutes = require("./routes/workouts");

app.use((req, res, next) => {
  //middleware
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
