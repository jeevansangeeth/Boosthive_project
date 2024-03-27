const mongoose = require("mongoose");
require("./db");

const postSchema = new mongoose.Schema({
  image: { type: String, required: true },
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  description: { type: String, required: true },
});

const PostedData = mongoose.model("PostedData", postSchema);

module.exports = PostedData;
