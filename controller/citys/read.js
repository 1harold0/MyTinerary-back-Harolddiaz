import City from "../../models/City.js";

let allCitys = async (req ,res,next) => {
    try {
        let all = await City.find()
        return  res.status(200).json({
            response : all
        })
    } catch (error) {
        next(error)
       

        }
    }

    let cityByName = async (req ,res,next) => {
        try {
            let nameQuery = req.params.nameCity
            let all = await City.find({name:nameQuery})
            return  res.status(200).json({
                response : all
            })
        } catch (error) {
            next(error)
           
    
            }
    }


  export  {allCitys,cityByName} 