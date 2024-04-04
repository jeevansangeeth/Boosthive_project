import PostedData from "../models/postedData.js";

export const PostedDatas = async (req, res) => {
  try {
    const data = await PostedData.find({ flag: "pending" });
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const ViewPost = async (req, res) => {
  try {
    const data = await PostedData.find({ flag: "Approved" });
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const MyPost = async (req, res) => {
  try {
    const data = await PostedData.find({ ownerId: req.params.id });
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const ApprovedDatas = async (req, res) => {
  try {
    const data = await PostedData.findByIdAndUpdate(req.params.id, {
      flag: "Approved",
    });
    res.json(data);
  } catch (err) {
    console.error("Error updating data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const RejectDatas = async (req, res) => {
  try {
    const data = await PostedData.findByIdAndUpdate(req.params.id, {
      flag: "Reject",
    });
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const workersData = async (req, res) => {
  try {
    const data = await PostedData.findByIdAndUpdate(req.params.id, {
      flag: "Reject",
    });
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
