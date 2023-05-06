const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.adminverify = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWTEC || "defaultsecret");
    console.log(payload.role);
    if (payload.role !== "admin")
      res.status(403).json({ message: "Unauthorized" });
    next();
  } catch (error) {
    res.status(403).json({ message: "Unauthorized" });
  }
};
