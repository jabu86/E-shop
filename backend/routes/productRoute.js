import express from "express";
import { protect, admin } from "../middleWare/authMiddleWare.js";
const router = express.Router();
import {
  getProducts,
  getProductById,
  getTopProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReviews,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/review").post(protect, createProductReviews);

export default router;
