const { Schema, model } = require("mongoose");

const petPostSchema = new Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  data: [
    {
      type: Buffer,
      contentType: String,
    },
  ],
});
module.exports = model("petPost", petPostSchema);
