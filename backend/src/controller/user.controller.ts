
import userModel from "../model/user.model.js";
import { v4 as uuidv4 } from 'uuid';
import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import mssql from "mssql";
import Config from "../config/db-config-2.js";


export const getAllUser: RequestHandler = async (req, res) => {
    try {
        let pool = mssql.connect(Config)
        let result = (await (await pool).request().execute('GetAllUsers')).recordset
        res.status(200).json(result)
    } catch (error: any) {

        res.status(500).json(error.message)


    }

}

export const getUserById: RequestHandler = async (req, res) => {
    try {
        let pool = await mssql.connect(Config)
        let result = await pool.request().
            input('id', mssql.Int, req.params.id as unknown as number)
            .execute('GetUserById')
    } catch (error : any) {

        res.status(500).json(error.message)

        
    }
}

export const addUser: RequestHandler =async (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.id = uuidv4();
    try {
        let pool = await mssql.connect(Config)
        let result = await pool.request()
            .input('id', mssql.UniqueIdentifier, req.body.id)
            .input('name', mssql.NVarChar, req.body.name)   
            .input('email', mssql.NVarChar, req.body.email)
            .input('password', mssql.NVarChar, req.body.password)
            .execute('CreateUser')
    } catch (error: any) {

        res.status(500).json(error.message)
        
    }

}

export const updateUser: RequestHandler = async (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    userModel.UpdateUserRequest(res, req.body)

    try {
        let pool = await mssql.connect(Config)
        let result = await pool.request()
            .input('id', mssql.UniqueIdentifier, req.body.id)
            .input('name', mssql.VarChar, req.body.name)
            .input('email', mssql.VarChar, req.body.email)
            .input('password', mssql.VarChar, req.body.password)
            .execute('UpdateUser')

        
    } catch (error: any) {
            
            res.status(500).json(error.message)
            
    }
}


export const getUserByEmail: RequestHandler = async (req, res) => {
    try {
        
        let pool = await mssql.connect(Config)
        let result = await pool.request()
            .input('email', mssql.VarChar, req.body.email)
            .execute('GetUserByEmail')
    } catch (error: any) {
        
    }
}

