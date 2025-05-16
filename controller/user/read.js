import User from "../../models/User.js"

let allUser = async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json(all) 
    } catch (error) {
        next(error)
    }
}

    let nameByUser = async (req ,res,next) => {
        try {
            let nameQuery = req.params.nameCity
            let all = await User.find({name:nameQuery})
            return  res.status(200).json({
                response : all
            })
        } catch (error) {
            next(error)
           
    
            }
    }

export {allUser,nameByUser }