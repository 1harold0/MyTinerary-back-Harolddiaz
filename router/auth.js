import {Router} from "express"
import singIn from "../controller/auth/singin.js"
import schema from "../schemas/auth/singIn.js"
import validateUser from "../middlewares/validation.js"
import accountNoExists from "../middlewares/accountNoExists.js"
import passworeValided from "../middlewares/passworeValided.js"
import generateToken from "../middlewares/generateToken.js"



const routerAuth=Router() 

routerAuth.post("/signIn", validateUser(schema), accountNoExists, passworeValided, generateToken, singIn)


export default routerAuth