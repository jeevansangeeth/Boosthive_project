import mongoose from "mongoose";
import connectDB from "./db.js";

connectDB();

const postSchema = new mongoose.Schema({
  bid: { type: mongoose.Types.ObjectId, ref: "Owner" },
  image: { type: String },
  businessName: { type: String },
  businessType: { type: String },
  description: { type: String },
  flag: { type: String },
});

const PostedData = mongoose.model("PostedData", postSchema);

export default PostedData;
