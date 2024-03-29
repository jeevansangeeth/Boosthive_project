import mongoose from "mongoose";
import db from "./db.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "Business Owner"],
    default: "user",
  },
  location: {
    type: String,
    required: true,
  },
});

const UserData = mongoose.model("PostedData", userSchema);

module.exports = UserData;
