import { Router } from "express";
import routerCity from "./citysRouter.js"
import routerItinerary from "./itineraryRouter.js";


let routerIndex = Router()
routerIndex.use("/citysRouter",routerCity)
routerIndex.use("/itineraryRouter",routerItinerary)


export default routerIndex
