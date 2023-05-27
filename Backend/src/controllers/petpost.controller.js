const os = require('os');
const express = require("express");

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const petpostModel = require('../models/petpost.model');

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
        petpostModel.create({
          name: req.body.name,
          data: arr,
          text: req.body.text,
          author: req.body.authorId,
          type: req.body.type,
          breed: req.body.breed,
        }).then((post)=>{
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
          res.send(post)
        })



      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPosts = async (req, res) => {
  const page = req.query.page
  const body = req.params.type === "cats" ? await petpostModel.find({type: "муур"}).limit(4*page) : req.params.type === "dogs" ? await petpostModel.find({type: "нохой"}).limit(4*page) : req.params.type === "others" ? await petpostModel.find({type: "бусад"}).limit(4*page) : await petpostModel.find({}).limit(4*page);
  res.send(body)
};
exports.getPost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const body = await petpostModel.find({ _id: id });
    res.send(body);
  } catch (err) {
    console.log(err);
  }
};

exports.deletePetPosts = async (req, res) => {
  await petpostModel.deleteMany({});
  res.send("all deleted");
};
