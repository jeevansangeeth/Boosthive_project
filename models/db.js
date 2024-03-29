import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/Boosthive")
  .then(() => console.log("server connected"))
  .catch((err) => console.log("server error: ", err));

const db = mongoose.connection;
export default db;
