import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Boosthive", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error: ", err));
};
export default connectDB;
