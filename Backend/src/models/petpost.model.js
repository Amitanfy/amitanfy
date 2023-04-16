const { Schema, model } = require("mongoose");

const petPostSchema = new Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  image: {
    data: Array,
    contentType: String,
  },
});
module.exports = model("petPost", petPostSchema);
