import mongoose from "mongoose";
import connectDB from "./db.js";

connectDB();

const workersSchema = new mongoose.Schema({
  image: { type: String },
  CompanyName: { type: String },
  workType: { type: String },
  location: { type: String },
  description: { type: String },
});

const workersData = mongoose.model("workersData", workersSchema);

export default workersData;
