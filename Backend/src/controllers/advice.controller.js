const Post = require("../models/advice.model");

exports.getAdvices = async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
};

exports.createAdvice = async (req, res) => {
  const post = req.body;
  Post.create(post).then((post) => res.send(post));
};

exports.getAdvice = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const post = await Post.find({ _id: id });
  res.send(post);
};

exports.deleteAdvice = async (req, res) => {
  const _id = req.params.id;
  await Post.deleteOne({ _id });
  res.send("deleted");
};
