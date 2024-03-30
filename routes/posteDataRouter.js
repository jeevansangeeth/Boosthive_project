import express from "express";
import post from "../controllers/postdataController.js";
import {Registration, Login} from "../controllers/authController.js";
import {authenticateUser} from "../middleware/authMiddleware.js";
import {
  ApprovedDatas,
  PostedDatas,
  RejectDatas,
} from "../controllers/demoController.js";
const router = express.Router();



router.post("/register", Registration);
router.post("/login", Login, authenticateUser);
router.post("/api/posts", post);
router.get("/postedData", PostedDatas);
router.put("/approveData/:id", ApprovedDatas);
router.put("/rejectedData/:id", RejectDatas);


export default router;
