import PostedData from "../models/postedData.js";

export const PostedDatas = async (req, res) => {
  try {
    const data = await PostedData.find({ flag: "Pending" });
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
