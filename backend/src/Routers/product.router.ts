import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct,getProductByCategory,getProductInTopLevelCategory } from "../controller/product.controller";


const productRouter = Router();


productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/category/:id", getProductByCategory);
productRouter.get("/category/top/:id", getProductInTopLevelCategory);   


export default productRouter;


