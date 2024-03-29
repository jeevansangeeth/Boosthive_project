import express from "express";
import data from "./routes/UpdateRouter.js";
import bodyParser from "body-parser";
const app = express();
import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use("/", data);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
