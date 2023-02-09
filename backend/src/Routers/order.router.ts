import { Router } from "express";
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, getOrderByUserId } from "../controller/order.controller.js";


const orderRouter = Router();

orderRouter.get("", getAllOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.post("", createOrder);
orderRouter.put("/update/:id", updateOrder);
orderRouter.delete("/delete/:id", deleteOrder);
orderRouter.get("/user/:id", getOrderByUserId);



export default orderRouter;