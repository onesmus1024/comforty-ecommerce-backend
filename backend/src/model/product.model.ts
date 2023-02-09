import connection from "./db-con.js";
import { Request, TYPES } from "tedious";


class productModel{

    static async GetAllProductsRequest(res: any){
        let result: any[] = [];
        let request = new Request("GetAllProducts", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
    
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );


        connection.callProcedure(request);

    }

    static async GetProductByIdRequest(res: any, id: number){
        let result: any[] = [];
    
        let request = new Request("GetProductById", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, id);
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );

        connection.callProcedure(request);
    }

    static async GetProductByCategoryRequest(res: any, category_id: number){
        let result: any[] = [];
        let request = new Request("GetProductsByCategory", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("category_id", TYPES.Int, category_id);
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );
        connection.callProcedure(request);

    }
    static async updateProductRequest(res: any, id: number,product: any){
        let result: any[] = [];
        let request = new Request("UpdateProduct", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, product.id);
        request.addParameter("name", TYPES.VarChar, product.name);
        request.addParameter("price", TYPES.Decimal, product.price);
        request.addParameter("category_id", TYPES.VarChar, product.category_id);
        request.addParameter("description", TYPES.VarChar, product.description);
        request.addParameter("product_images_url", TYPES.VarChar, product.image);
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );
        connection.callProcedure(request);

    }

    static async deleteProductRequest(res: any, id: number){
        let result: any[] = [];
        let request = new Request("DeleteProduct", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("id", TYPES.Int, id);
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );
        connection.callProcedure(request);

    }

    static async AddProductRequest(res: any, product: any){
        let result: any[] = [];
        let request = new Request("CreateProduct", (err, rowCount) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount);
            }
        }
        );
        request.addParameter("name", TYPES.VarChar, product.name);
        request.addParameter("price", TYPES.Decimal, product.price);
        request.addParameter("category_id", TYPES.VarChar, product.category_id);
        request.addParameter("description", TYPES.VarChar, product.description);
        request.addParameter("product_images_url", TYPES.VarChar, product.image);
        request.on("row", (columns) => {
            let product: any = {};
            columns.forEach((column) => {
                product[column.metadata.colName] = column.value;
            }
            );
            result.push(product);
        }
        );

        request.on("doneProc", (rowCount, more, returnStatus, rows) => {
            res.send(JSON.stringify(result));
        }
        );
        connection.callProcedure(request);

    }

    

    


}


export default productModel;