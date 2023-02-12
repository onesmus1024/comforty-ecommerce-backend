import ReviewModel from "../model/review.model";
import Joi from "joi";

const validateReview = (review: ReviewModel) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        user_id: Joi.string().required(),
        product_id: Joi.string().required(),
        rating: Joi.number().required(),
        comment: Joi.string().required(),
    });

    return schema.validate(review);
}


export default validateReview;