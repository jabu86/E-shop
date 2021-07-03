import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import path from "path";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleWare/errorMiddleWare.js";
import productRoute from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoute.js";

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/products", productRoute);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(
    `Server running  in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
