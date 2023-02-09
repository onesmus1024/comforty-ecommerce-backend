import connection from "./db-con.js";
import { Request, TYPES } from "tedious";



class userModel{
    
        static async GetAllUsersRequest(res: any){
            let result: any[] = [];
            let request = new Request("GetAllUsers", (err, rowCount) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(rowCount);
                }
            }
            );
        
            request.on("row", (columns) => {
                let user: any = {};
                columns.forEach((column) => {
                    user[column.metadata.colName] = column.value;
                }
                );
                result.push(user);
            }
            );
        
            request.on("doneProc", (rowCount, more, returnStatus, rows) => {
                res.send(JSON.stringify(result));
            }
            );
        
         
        connection.callProcedure(request);
            
        }

    static async GetUserByIdRequest(res: any, id: number){
        let result: any[] = [];
    
        let request = new Request("GetUserById", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        // add parameters for the stored procedure
        request.addParameter("id", TYPES.Int, id);
        request.on("row", (columns) => {
            let user: any = {};
            columns.forEach((column) => {
                user[column.metadata.colName] = column.value;
            }
            );
            result.push(user);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            // return json result
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);


    }

    static async GetUserByEmailRequest(res: any, email: string){
        let result: any[] = [];
        let request = new Request("GetUserByEmail", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
                
            }
        }
        );
        request.addParameter("email", TYPES.VarChar, email);
        request.on("row", (columns) => {
            let user: any = {};
            columns.forEach((column) => {
                user[column.metadata.colName] = column.value;
            }
            );
            result.push(user);
        }
        );
    
        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            // return json result
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

    // create a new user
    static async AddUserRequest(res: any, user: any){
        let result: any[] = [];
        let request = new Request("CreateUser", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                res.send(JSON.stringify(result));
            }
        }
        );
        request.addParameter("email", TYPES.VarChar, user.email);
        request.addParameter("password", TYPES.VarChar, user.password);
        request.on("row", (columns) => {
            let user: any = {};
            columns.forEach((column) => {
                user[column.metadata.colName] = column.value;
            }
            );
            result.push(user);
        }
        );
    
        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            // return json result
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);   
    }

    // update a user
    static async UpdateUserRequest(res: any, user: any){
        // update user
        let result: any[] = [];
        let request = new Request("UpdateUser", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                res.send(JSON.stringify(result));
            }
        }
        );
        request.addParameter("id", TYPES.Int, user.id);
        request.addParameter("email", TYPES.VarChar, user.email);
        request.addParameter("password", TYPES.VarChar, user.password);
        request.on("row", (columns) => {
            let user: any = {};
            columns.forEach((column) => {
                user[column.metadata.colName] = column.value;
            }
            );
            result.push(user);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            // return json result
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }
}



export default userModel;