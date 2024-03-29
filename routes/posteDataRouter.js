const express = require('express');
const router = express.Router();
const PostedData = require('../models/postedData');
const Userdata = require('../models/Userdata');

const initialData = [
  { "image": "https://example.com/image1.jpg",
    "businessName": "XYZ Tech Solutions",
    "businessType": "Technology Services",
    "description": "Providing comprehensive tech solutions for businesses of all sizes.",
    "flag": "Pending"
  },
  {
    "image": "https://example.com/image2.jpg",
    "businessName": "Fresh Eats Delivery",
    "businessType": "Food Delivery Service",
    "description": "Bringing fresh and healthy meals straight to your doorstep.",
    "flag": "Pending"
  },
];
router.post("/approvedData/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dataToUpdate = await PostedData.findById(id);

    if (!dataToUpdate) {
      return res.status(404).json({ error: "Data not found" }); 
    }

    dataToUpdate.flag = "Approved";
    await dataToUpdate.save();

    res.status(200).json(dataToUpdate);
  } catch (error) {
    res.status(500).json({ error: "Failed to update data flag" });
  }
});
router.get("/approvedData", async (req, res) => {
  try {
    const approvedData = await PostedData.find({ flag: "Approved" });

    res.status(200).json(approvedData);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve approved data" });
  }
});
module.exports = router;
