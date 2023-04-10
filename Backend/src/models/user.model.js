const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  pass: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  code: {
    type: String,
  },
});
const User = model("users", userSchema);
module.exports = User;
