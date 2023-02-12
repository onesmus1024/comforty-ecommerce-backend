
import { Request, Response,RequestHandler } from "express";
import { validateOrder } from "../helpers/order.validate";
import { v4 as uuidv4 } from 'uuid';

import OrderModel from "../model/order.model";
import db from "../Databasehelper/db-connection";


export const createOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        // validate order fields
        const { error } = validateOrder(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const order: OrderModel = {
            id: uuidv4() as string,
            user_id: req.body.user.id,
            created_at: new Date() as unknown as string,
            is_paid: req.body.is_paid,
            is_delivered: req.body.is_delivered,
            amount: req.body.amount,
        }

        if (db.checkConnection() as unknown as boolean) {

            const insertedOrder: OrderModel = await db.exec("InsertOrUpdateOrder", { ...order }) as unknown as OrderModel;

            if (insertedOrder) {
                res.status(200).send(insertedOrder);
            }
            else {
                res.status(500).send("Error creating order");
            }

        } else {
            res.status(500).send("Error creating order");
        }

    } catch (error) {

        res.status(500).send("Error creating order");

    }
}


export const getAllOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const orders: OrderModel[] = await db.exec("GetAllOrders", {}) as unknown as OrderModel[];

            if (orders) {
                res.status(200).send(orders);
            }
            else {
                res.status(500).send("Error getting orders");
            }

        }
    } catch (error) {

        res.status(500).send("Error getting orders");

    }
}

export const getOrderById: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const order: OrderModel = await db.exec("GetOrderById", { id: req.params.id }) as unknown as OrderModel;

            if (order) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error getting order");
            }

        }
    } catch (error) {

        res.status(500).send("Error getting order");

    }
}

export const deleteOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const order: OrderModel = await db.exec("DeleteOrder", { id: req.params.id }) as unknown as OrderModel;

            if (order) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error deleting order");
            }

        }
    } catch (error) {

        res.status(500).send("Error deleting order");

    }
}

export const updateOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const order: OrderModel = await db.exec("InsertOrUpdateOrder", { ...req.body }) as unknown as OrderModel;

            if (order) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error updating order");
            }

        }
    } catch (error) {

        res.status(500).send("Error updating order");

    }
}

export const getOrdersByUserId: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const orders: OrderModel[] = await db.exec("GetOrdersByUserId", { user_id: req.params.user_id }) as unknown as OrderModel[];

            if (orders) {
                res.status(200).send(orders);
            }
            else {
                res.status(500).send("Error getting orders");
            }

        }
    } catch (error) {

        res.status(500).send("Error getting orders");

    }
}


