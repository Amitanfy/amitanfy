const express = require("express");
const {
  postpet,
  deletePetPosts,
  getPosts,
  getPost,
} = require("../controllers/petpost.controller");
const petPostRouter = express.Router();
const {  verify } = require("../middleware/verify");
const {  adminverify } = require("../middleware/adminverify");

petPostRouter
  .get("/PetPosts", getPosts)
  .post("/PostPet",verify, postpet)
  .delete("/delallposts",adminverify, deletePetPosts)
  .get("/PetPost/:id", getPost);

module.exports = petPostRouter;
