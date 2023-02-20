const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter a username"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: [true, "Email is already taken"],
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
