import PaymentModel from "../model/payment.model";
import Joi from "joi";


const validatePayment = (payment: PaymentModel) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        user_id: Joi.string().required(),
        order_id: Joi.string().required(),
        amount: Joi.number().required(),
        paymentMethod_id: Joi.string().required(),
        created_at: Joi.string().required(),
    });

    return schema.validate(payment);
}


export default validatePayment;