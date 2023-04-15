const express = require("express");
const { postpet } = require("../controllers/petpost.controller");
const petPostRouter = express.Router();

petPostRouter.get("/petPosts").post("/PostPet", postpet);

module.exports = petPostRouter;
