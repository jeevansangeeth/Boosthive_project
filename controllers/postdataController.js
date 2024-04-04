import PostedData from "../models/postedData.js";

const post = async (req, res) => {
  try {
    const {
      ownerId,
      image,
      businessName,
      businessType,
      location,
      description,
      flag,
    } = req.body;

    // Perform data validation here if needed

    // Create a new PostedData instance
    const newPost = new PostedData({
      ownerId,
      image,
      businessName,
      businessType,
      location,
      description,
      flag,
    });

    // Save the new post to the database
    await newPost.save();

    // Respond with a success message and the newly created post
    res
      .status(201)
      .json({ message: "Post created successfully", data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    // Handle different types of errors appropriately
    res.status(500).json({ message: "Failed to create post" });
  }
};

export default post;
