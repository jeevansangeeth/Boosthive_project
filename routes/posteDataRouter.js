import express from "express";
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
