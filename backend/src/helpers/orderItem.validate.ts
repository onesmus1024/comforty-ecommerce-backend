import OrderItemModel from "../model/orderItem.model";
import Joi from "joi";

// validate order item fields

const orderItemSchema = Joi.object({
    order_id: Joi.string().min(3).max(255).required(),
    product_id: Joi.string().min(3).max(255).required(),
    quantity: Joi.string().min(3).max(255).required(),
});


export const validateOrderItem = (orderItem: OrderItemModel) => {
    return orderItemSchema.validate(orderItem);
}


