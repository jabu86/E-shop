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

export { addOrderItem };
