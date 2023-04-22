const { Schema, model, Types } = require("mongoose");

const adviceSchema = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});
module.exports = model("advice", adviceSchema);
