const { Schema, model } = require("mongoose");

const petPostSchema = new Schema({
  name: {
    type: String,
  },
  type:{
    type: String,
    default:"cat"
  },
  breed:{
    type:String,
    default:"british shorthair"
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
