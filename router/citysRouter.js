import { Router } from "express";
import { allCitys, cityByName } from "../controller/citys/read.js";
import {createCity,createManyCities} from "../controller/citys/create.js"


const routerCity = Router()
routerCity.get("/allcitys",allCitys)
routerCity.get("/name/:nameCity",cityByName)
routerCity.post("/cityCreate",createCity)
routerCity.post("/manyCitys", createManyCities);

export default routerCity