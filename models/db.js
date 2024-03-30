import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Boosthive", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;

mongoose
  .connect("mongodb://localhost:27017/Boosthive")
  .then(() => console.log("server connected"))
  .catch((err) => console.log("server error: ", err));

const db = mongoose.connection;
export default db;

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


