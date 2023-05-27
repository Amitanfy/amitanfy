const os = require('os');
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
             os.platform() === "win32" ? __dirname.substring(0, __dirname.lastIndexOf("\\")) + "\\temp\\" +req.files[i].filename : __dirname.substring(0, __dirname.lastIndexOf("/")) + "/temp/" +req.files[i].filename
            )

          );
        }
        const newImage = new petPostModel({
          name: req.body.name,
          data: arr,
          text: req.body.text,
          author: req.body.authorId,
          type: req.body.type,
          breed: req.body.breed,
        });
        newImage
          .save()
          .then(() => {
            for (let i = 0; i < req.files.length; i++) {
              fs.unlink(
                os.platform() === "win32" ? __dirname.substring(0, __dirname.lastIndexOf("\\")) + "\\temp\\" + req.files[i].filename : __dirname.substring(0, __dirname.lastIndexOf("/")) + "/temp/" + req.files[i].filename,  
                (err) => {
                  if (err) {
                    throw err;
                  }
                }
              );
            }
          })
          .catch((err) => res.send(err));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPosts = async (req, res) => {
  console.log(req.params.type)
  const body = req.params.type === "cats" ? await petPostModel.find({type: "муур"}) : req.params.type === "dogs" ? await petPostModel.find({type: "нохой"}) : req.params.type === "others" ? await petPostModel.find({type: "бусад"}) : await petPostModel.find({});
  res.send(body)
};
exports.getPost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const body = await petPostModel.find({ _id: id });
    res.send(body);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePetPosts = async (req, res) => {
  await petPostModel.deleteMany({});
  res.send("all deleted");
};
