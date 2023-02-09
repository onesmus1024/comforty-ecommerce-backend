
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, "secretkey", (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.body.user = authData;
                next();
            }
        }
        );
    } else {
        res.sendStatus(403);
    }
};