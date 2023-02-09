import connection from "./db-con.js";
import { Request, TYPES } from "tedious";

class orderModel {

    static async GetAllOrdersRequest(res: any) {
        let result: any[] = [];
        let request = new Request("GetAllOrders", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );

        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);

    }

    static async GetOrderByIdRequest(res: any, id: number) {
        let result: any[] = [];

        let request = new Request("GetOrderById", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, id);
        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

    static async GetOrderByUserIdRequest(res: any, user_id: number) {
        let result: any[] = [];

        let request = new Request("GetOrderByUserId", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("user_id", TYPES.Int, user_id);
        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

    static async updateOrderRequest(res: any, id: number, order: any) {
        let result: any[] = [];

        let request = new Request("UpdateOrder", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, id);
        request.addParameter("user_id", TYPES.Int, order.user_id);
        request.addParameter("created_at", TYPES.Date, order.created_at);
        request.addParameter("is_paid", TYPES.Bit, order.is_paid);
        request.addParameter("is_delivered", TYPES.Bit, order.is_delivered);
        request.addParameter("amount", TYPES.Decimal, order.amount);

        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);

    }

    static async deleteOrderRequest(res: any, id: number) {
        let result: any[] = [];

        let request = new Request("DeleteOrder", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, id);
        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

    static async createOrderRequest(res: any, order: any) {
        let result: any[] = [];

        let request = new Request("CreateOrder", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("user_id", TYPES.Int, order.user_id);
        request.addParameter("amount", TYPES.Decimal, order.amount);

        request.on("row", (columns) => {
            let order: any = {};
            columns.forEach((column) => {
                order[column.metadata.colName] = column.value;
            }
            );
            result.push(order);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

}


export default orderModel;