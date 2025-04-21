import City from "../../models/City.js";


let allCitys = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json(all) 
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

    let cityById = async (req, res, next) => {
        try {
          const { id } = req.params;
          let city = await City.findById(id);
          if (!city) {
            return res.status(404).json({ message: "City not found" });
          }
          return res.status(200).json(city);
        } catch (error) {
          next(error);
        }
      };


  export  {allCitys,cityByName,cityById} 