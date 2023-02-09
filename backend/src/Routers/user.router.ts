import { Router  } from "express";
import { getAllUser, getUserById,addUser, updateUser,getUserByEmail } from "../controller/user.controller.js";


const UserRouter = Router();

UserRouter.get("", getAllUser);
UserRouter.get("/:id", getUserById);
UserRouter.post("", addUser);
UserRouter.put("/update", updateUser);
UserRouter.get("/email/:email", getUserByEmail);

export default UserRouter;