import express from "express";

const router = express.Router();
import post from "../controllers/postdataController.js";

router.post("/api/posts", post);

import {
  ApprovedDatas,
  PostedDatas,
  RejectDatas,
} from "../controllers/demoController.js";
const router = express.Router();

router.get("/postedData", PostedDatas);
router.put("/approveData/:id", ApprovedDatas);
router.put("/rejectedData/:id", RejectDatas);


export default router;
