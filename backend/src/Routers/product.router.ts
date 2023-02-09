import { Router } from "express";
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, getProductByCategory } from "../controller/product.controller.js";


const productRouter = Router();

productRouter.get("", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/addproduct", addProduct);
productRouter.put("update/:id", updateProduct);
productRouter.delete("delete/:id", deleteProduct);
productRouter.get("/category/:category_id", getProductByCategory);



export default productRouter;