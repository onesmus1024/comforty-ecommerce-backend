import OrderModel from "../model/order.model";
import Joi from "joi";


// validate order fields

const orderSchema = Joi.object({
    user_id: Joi.string().min(3).max(255).required(),
    created_at: Joi.string().min(3).max(255).required(),
    is_paid: Joi.string().min(3).max(255).required(),
    is_delivered: Joi.string().min(3).max(255).required(),
    amount: Joi.string().min(3).max(255).required(),
});

export const validateOrder = (order: OrderModel) => {
    return orderSchema.validate(order);
}

