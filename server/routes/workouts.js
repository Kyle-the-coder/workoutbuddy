const express = require("express");

const router = express.Router();

router.get("/", () => {
  console.log("new route");
});

router.get("/get", () => {
  console.log("new get");
});

module.exports = router;
