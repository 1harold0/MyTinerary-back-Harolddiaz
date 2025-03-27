import { Router } from "express";
import routerCity from "./citysRouter.js"


let routerIndex = Router()
routerIndex.use("/citysRouter",routerCity)



export default routerIndex
