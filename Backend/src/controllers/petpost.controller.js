const express = require("express");
const petPostModel = require("../models/petpost.model");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

//storage declaration
const Storage = multer.diskStorage({
  destination: "temp",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).array("testImage");

exports.postpet = (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const arr = [];
        for (let i = 0; i < req.files.length; i++) {
          arr[i] = fs.readFileSync(
            path.join(
              __dirname.substring(0, __dirname.lastIndexOf("/")) +
                "/temp/" +
                req.files[i].filename
            )
          );
        }
        const newImage = new petPostModel({
          name: req.body.name,
          data: arr,
          text: req.body.text,
        });
        newImage
          .save()
          .then(() => {
            for (let i = 0; i < req.files.length; i++) {
              fs.unlink(
                __dirname.substring(0, __dirname.lastIndexOf("/")) +
                  "/temp/" +
                  req.files[i].filename,
                (err) => {
                  if (err) {
                    throw err;
                  }
                }
              );
            }
            res.send("success");
          })
          .catch((err) => res.send(err));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPosts = async (req, res) => {
  const body = await petPostModel.find({});
  res.send(body);
};

exports.deletePetPosts = async (req, res) => {
  await petPostModel.deleteMany({});
  res.send("all deleted");
};
