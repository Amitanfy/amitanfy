const express = require("express");
const { getUsers, signUp, signIn, verifyUser, deleteUsers, handleplatform } = require("../controllers/user.controller");
const { changeRole, removeUser } = require("../controllers/user.controller");
const { verify } = require("../middleware/verify");
const { adminverify } = require("../middleware/adminverify");
const userRouter = express.Router();

userRouter
  .get("/users",adminverify, getUsers)
  .post("/signup", signUp)
  .post("/signin", signIn)
  .post("/platformsignin",handleplatform)
  .delete("/delete/:id",adminverify, removeUser)
  .put("/changerole/:id",adminverify, changeRole)
  .put("/verifyuser", verifyUser)
  .delete("/delall",adminverify,deleteUsers);

module.exports = userRouter;
