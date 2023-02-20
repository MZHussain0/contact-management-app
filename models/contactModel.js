const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name"],
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "please provide a phone number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
