import Order from "../models/Order.js";
import asyncHandler from "express-async-handler";
//@DESC Create new Order
//@ROUTE POST /api/orders
//@ACCESS Private
const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      user: req.user.id,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@desc     Get order By ID
//@route    GET /api/orders/:id
//@access   Private
const getOderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    return res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@desc     Update order to paid
//@route    PUT /api/orders/:id/pay
//@access   Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    return res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});
//@desc     Get user's orders
//@route    GET /api/orders/myorders
//@access   PRIVATE
const getUserOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user.id });
  if (order) {
    return res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@desc     Update order to delivered
//@route    PUT /api/orders/:id/deliver
//@access   PRIVATE
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@desc     Get all orders
//@route    GET /api/orders/
//@access   PRIVATE/ADMIN
const getOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({}).populate("user", "id name");
  return res.json(order);
});

export {
  getOrders,
  addOrderItem,
  getOderById,
  updateOrderToPaid,
  getUserOrders,
  updateOrderToDelivered,
};
