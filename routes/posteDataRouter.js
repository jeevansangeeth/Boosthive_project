import express from "express";
const router = express.Router();
import post from "../controllers/postdataController.js";

router.post("/api/posts", post);

export default router;
