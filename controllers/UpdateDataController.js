import PostedData from "../models/postedData.js";
export const Find = async (req, res) => {
  try {
    const posted = await PostedData.find({ flag: "Pending" });
    if (posted) {
      res.json(posted);
    } else {
      res.send("Not Availabe");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const FindById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostedData.findById(postId);
    console.log(post);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const Update = async (req, res) => {
  try {
    const postId = req.params.id;
    const { image, businessName, businessType, description } = req.body;
    if (!postId) {
      return res.status(400).json({ message: "Post ID is required" });
    }
    const updatedPost = await PostedData.findByIdAndUpdate(
      postId,
      { image, businessName, businessType, description },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    await PostedData.findByIdAndDelete(id);
    res.send("data has been deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting the data");
  }
};
