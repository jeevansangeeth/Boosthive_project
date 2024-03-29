const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Boosthive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("server connected"))
.catch((err) => console.log("server error: ", err));

module.exports;
