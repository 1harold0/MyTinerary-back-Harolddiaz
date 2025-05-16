import { Router } from "express";
import { allUser,nameByUser } from "../controller/user/read.js";
import {createUsers} from "../controller/user/create.js"
import validateUser from "../middlewares/validation.js";
import { SchemaUser } from "../schemas/user/create.js";
import passport from "../middlewares/passport.js";
import hashPassword from "../middlewares/create.js"


const routerUser= Router()
routerUser.get("/allUser", passport.authenticate("jwt", { session: false }), allUser);
routerUser.get("/name/:nameUser",nameByUser)
routerUser.post("/userCreate",validateUser(SchemaUser),hashPassword ,createUsers)


export default routerUser