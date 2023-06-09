const { Schema, model, Types } = require("mongoose");

const petPostSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    breed: {
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
    author: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
module.exports = model("petPost", petPostSchema);
