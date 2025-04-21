import { Router } from "express";
import {allItinerary,itineraryByCity,itineraryById} from "../controller/itinerary/read.js"
import { createItinerary } from "../controller/itinerary/create.js";
import { updateItinerary } from "../controller/itinerary/update.js";
import { deleteItinerary } from "../controller/itinerary/delete.js";

const routerItinerary = Router()
routerItinerary.get("/allitinerary", allItinerary)
routerItinerary.get("/byCity/:cityId", itineraryByCity);
routerItinerary.get("/:id", itineraryById);
routerItinerary.post("/", createItinerary);
routerItinerary.put("/:id", updateItinerary);
routerItinerary.delete("/:id", deleteItinerary);

export default routerItinerary