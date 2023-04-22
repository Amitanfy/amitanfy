const express = require("express");
const {
  createAdvice,
  deleteAdvice,
  getAdvice,
  getAdvices,
} = require("../controllers/advice.controller");
const petAdviceRouter = express.Router();

petAdviceRouter
  .get("/AdvicePosts", getAdvices)
  .get("/AdvicePost", getAdvice)
  .delete("/deleteAdvice", deleteAdvice)
  .post("/postAdvice", createAdvice);

module.exports = petAdviceRouter;
