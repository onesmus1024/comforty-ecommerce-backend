import productModel from "../model/product.model.js";
import { RequestHandler } from "express";


export const getAllProducts:RequestHandler=(req,res)=>{
    productModel.GetAllProductsRequest(res)
    
}

export const getProductById:RequestHandler=(req,res)=>{
    productModel.GetProductByIdRequest(res,req.params.id as unknown as number)
    
}

export const addProduct:RequestHandler=(req,res)=>{
    productModel.AddProductRequest(res,req.body)
    
}

export const updateProduct:RequestHandler=(req,res)=>{
    productModel.updateProductRequest(res,req.params.id as unknown as number,req.body)
    
}

export const deleteProduct:RequestHandler=(req,res)=>{
    productModel.deleteProductRequest(res,req.params.id as unknown as number)
    
}

export const getProductByCategory:RequestHandler=(req,res)=>{
    productModel.GetProductByCategoryRequest(res,req.params.category_id as unknown as number)
    
}



