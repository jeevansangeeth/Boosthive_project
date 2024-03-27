const mongoose = require("mongoose");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Boosthive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("server commected"))
  .catch((err) => console.log("server error: ", err));

module.exports;
