import PostedData from "../models/postedData.js";
const post = async (req, res) => {
  try {
    const { image, businessName, businessType, description } = req.body;
    const newPost = new PostedData({
      image,
      businessName,
      businessType,
      description,
    });
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default post;
