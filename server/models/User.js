const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: [2, "Minimun Name length 2 characters"],
    maxlength: [30, "Maximun Name length 30 characters"],
  },
  ID: {
    type: String,
    required: true,
    minlength: [8, "Minimun code length 8 characters"],
    maxlength: [9, "Maximun code length 9 characters"],
  },
  Phone: {
    type: String,
    required: true,
    minlength: [12, "Minimun PhoneNumber length 12 characters"],
  },
  IP: {
    type: String,
    required: true,
    minlength: [9, "Minimun IP length 9 characters"],
    maxlength: [15, "Maximun IP length 15 characters"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
