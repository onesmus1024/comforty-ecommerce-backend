import CartItemModel from "../model/cartItem.model";
import Joi from "joi";
// class CartItemModel {
//     id: string;
//     userId: string;
//     productId: string;
//     quantity: number;
  
//     constructor(id: string, userId: string, productId: string, quantity: number) {
//       this.id = id;
//       this.userId = userId;
//       this.productId = productId;
//       this.quantity = quantity;
//     }
//   }


// validate cart item

const validateCartItem = (cartItem: CartItemModel) => {
    const schema = Joi.object({
        userId: Joi.string().min(5).max(255).required(),
        productId: Joi.string().min(5).max(255).required(),
        quantity: Joi.number().min(1).required(),
    });
    
    return schema.validate(cartItem);
    }


export default validateCartItem;
  