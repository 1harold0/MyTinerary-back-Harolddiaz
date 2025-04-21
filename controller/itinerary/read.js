import Itinerary  from "../../models/Itinerary.js"

let allItinerary = async (req, res, next) => {
    try {
        let all = await Itinerary.find()
        return res.status(200).json(all) 
    } catch (error) {
        next(error)
    }
}


let itineraryByCity = async (req, res, next) => {
  try {
    const { cityId } = req.params;

    console.log("Buscando itinerarios para ciudad con ID:", cityId);

    let itineraries = await Itinerary.find({ city: cityId })
      .populate("user");

    console.log("Itinerarios encontrados:", itineraries);

    return res.status(200).json(itineraries);
  } catch (error) {
    console.error("Error en itineraryByCity:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const itineraryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findById(id).populate("user");
    if (!itinerary) return res.status(404).json({ message: "Itinerary not found" });
    return res.status(200).json(itinerary);
  } catch (error) {
    next(error);
  }
};
export {allItinerary,itineraryByCity,itineraryById}