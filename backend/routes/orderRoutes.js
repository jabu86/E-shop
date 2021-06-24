import express from "express";
const router = express.Router();
import { addOrderItem } from "../controllers/orderController.js";
import { protect } from "../middleWare/authMiddleWare.js";
//Order routes
router.route("/").post(protect, addOrderItem);

export default router;
