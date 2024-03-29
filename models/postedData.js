import mongoose from "mongoose";
import db from "./db.js";

const postSchema = new mongoose.Schema({
  image: { type: String, required: true },
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  description: { type: String, required: true },
});

const PostedData = mongoose.model("PostedData", postSchema);

export default PostedData;
