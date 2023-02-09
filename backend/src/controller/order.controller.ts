import orderModel from "../model/order.model.js";
import { RequestHandler } from "express";
import mssql from "mssql";
import Config from "../config/db-config-2.js";

export const getAllOrders:RequestHandler=async (req,res)=>{
   try {
    let pool = await mssql.connect(Config)
    let result = await (await pool.request().execute('GetAllOrders')).recordset
    res.status(200).json(result)
   } catch (error: any) {

    res.status(500).json(error.message)
    
   }
    
}

export const getOrderById:RequestHandler= async (req,res)=>{

    try {
        let pool = await mssql.connect(Config)
        let result =await  (await pool.request().execute('GetOrderById')).recordset
        res.status(200).json(result)
        
    } catch (error: any) {

        res.status(500).json(error.message)
        
    }
    
}

export const createOrder:RequestHandler= async (req,res)=>{
    try {
        let pool = await mssql.connect(Config)
        let order = req.body
        let result =await   pool.request()
        .input('user_id',mssql.Int,order.user_id)
        .input('product_id',mssql.Int,order.product_id)
    } catch (error: any) {

        res.status(500).json(error.message)
        
    }
     
}

export const updateOrder:RequestHandler=(req,res)=>{
    orderModel.updateOrderRequest(res,req.params.id as unknown as number,req.body)
    
}

export const deleteOrder:RequestHandler=(req,res)=>{
    orderModel.deleteOrderRequest(res,req.params.id as unknown as number)
    
}

export const getOrderByUserId:RequestHandler=(req,res)=>{
    orderModel.GetOrderByUserIdRequest(res,req.params.id as unknown as number)
    
}



