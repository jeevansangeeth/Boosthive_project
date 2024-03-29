import express from "express";

import {Registration, Login} from "../controllers/authController.js";
import {authenticateUser} from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", Registration);

router.post("/login", Login, authenticateUser);

export default router;
