import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";
//@DESC Fetch all products
//@ROUTE GET /api/products
//@ACCESS PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@DESC Fetch single products
//@ROUTE GET /api/products/:id
//@ACCESS PUBLIC
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProducts, getProductById };
