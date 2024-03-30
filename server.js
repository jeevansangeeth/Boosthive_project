import express from "express";
import cors from "cors";
import router from "./routes/posteDataRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST , PUT, DELETE");
  next();
});

// app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
