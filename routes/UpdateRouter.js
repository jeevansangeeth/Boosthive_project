import express from "express";
import {
  Find,
  FindById,
  Update,
  Delete,
} from "../controllers/UpdateDataController.js";
const router = express.Router();

router.get("/postdata", Find);

router.get("/postdata/:id", FindById);

router.put("/postdata/update/:id", Update);

router.delete("/postdata/delete/:id", Delete);
export default router;
