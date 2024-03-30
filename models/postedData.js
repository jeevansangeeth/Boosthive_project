import mongoose from "mongoose";
import connectDB from "./db.js";

connectDB();
const postSchema = new mongoose.Schema({
  image: { type: String },
  businessName: { type: String },
  businessType: { type: String },
  description: { type: String },
  flag: { type: String },
});

const PostedData = mongoose.model("postedData", postSchema);

export default PostedData;
