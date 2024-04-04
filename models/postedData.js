import mongoose from "mongoose";
import connectDB from "./db.js";

connectDB();

const postSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Types.ObjectId },
  image: { type: String },
  businessName: { type: String },
  businessType: { type: String },
  location: { type: String },
  description: { type: String },
  flag: { type: String },
});

const PostedData = mongoose.model("PostedData", postSchema);

export default PostedData;
