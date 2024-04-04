import express from "express";
import post from "../controllers/postdataController.js";
import { Registration, Login } from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  ApprovedDatas,
  MyPost,
  PostedDatas,
  RejectDatas,
  ViewPost,
} from "../controllers/demoController.js";
import {
  Find,
  FindById,
  Update,
  Delete,
} from "../controllers/UpdateDataController.js";
const router = express.Router();

router.post("/register", Registration);
router.post("/login", Login, authenticateUser);
router.post("/posts", post, authenticateUser);
router.get("/postedData", PostedDatas, authenticateUser);
router.put("/approveData/:id", ApprovedDatas, authenticateUser);
router.put("/rejectedData/:id", RejectDatas, authenticateUser);
router.get("/postdata", Find, authenticateUser);
router.get("/postdata/:id", FindById, authenticateUser);
router.put("/postdata/update/:id", Update, authenticateUser);
router.delete("/postdata/delete/:id", Delete, authenticateUser);
router.get("/mypost/:id", MyPost, authenticateUser);
router.get("/viewpost", ViewPost, authenticateUser);

export default router;
