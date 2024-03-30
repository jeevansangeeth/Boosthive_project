import express from "express";

import cors from "cors";
import router from "./routes/authRouter.js";
// import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./models/db.js";
dotenv.config();
const app = express();

app.use(cors({origin: "http://localhost:5173"}));

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

import router from "./routes/posteDataRouter.js";
const app = express();


import cors from "cors";
app.use(cors({ origin: "*" }));

import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(express.json());

app.use("/", router);

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");

});
