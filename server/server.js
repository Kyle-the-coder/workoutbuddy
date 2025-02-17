require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/workouts");
const cors = require("cors");

const app = express();
const workoutRoutes = require("./routes/workouts");

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
