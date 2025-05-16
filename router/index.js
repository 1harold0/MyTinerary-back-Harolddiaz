import { Router } from "express";
import routerCity from "./citysRouter.js"
import routerItinerary from "./itineraryRouter.js";
import routerUser from "./user.js";
import routerAuth from "./auth.js"

let routerIndex = Router()
routerIndex.use("/citysRouter",routerCity)
routerIndex.use("/itineraryRouter",routerItinerary)
routerIndex.use("/userRouter",routerUser)
routerIndex.use("/auth",routerAuth)


export default routerIndex
