const express = require("express");
const petPostModel = require("../models/petpost.model");
const multer = require("multer");
const fs = require("fs");


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
        console.log(req.files)

        const newImage = new petPostModel({
          name: req.body.name,
          image: {
            data: req.files,
            contentType: "image/jpeg",
          },
          text: req.body.text,
        });
        newImage
          .save()
          .then(() => {
            console.log(__dirname);
            res.send("success");
            fs.unlink(
              __dirname.substring(0, __dirname.lastIndexOf("/")) +
                "/temp/" +
                req.file.filename,
              (err) => {
                if (err) {
                  throw err;
                }
              }
            );
          })
          .catch((err) => res.send(err));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPosts = async(req,res) =>{
  const body = await petPostModel.find({});
  res.send(body)
}

exports.deletePetPosts = async(req,res) => {
  await petPostModel.deleteMany({});
  res.send('all deleted')
}
