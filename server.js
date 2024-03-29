const express = require("express");
const app = express();
const router = require("./routes/PosteDatarouter"); // Update the path to the correct route file
const PostedData = require("./models/postedData");

app.use(express.json());
app.use("/api", router);

app.get('/postedData', async (req, res) => {
  try {
    const count = await PostedData.countDocuments();

    if (count === 0) {
      await PostedData.insertMany(initialData);
    }
    const postedData = await PostedData.find();
    res.status(200).json(postedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add an endpoint to retrieve approved data
app.get('/approvedData', async (req, res) => {
  try {
    const approvedData = await PostedData.find({ flag: "Approved" });
    res.status(200).json(approvedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
