const express = require("express");
const {
  postpet,
  deletePetPosts,
  getPosts,
  getPost,
} = require("../controllers/petpost.controller");
const petPostRouter = express.Router();

petPostRouter
  .get("/PetPosts", getPosts)
  .post("/PostPet", postpet)
  .delete("/delallposts", deletePetPosts)
  .get("/PetPost/:id", getPost);

module.exports = petPostRouter;
