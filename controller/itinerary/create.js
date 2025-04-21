import Itinerary from "../../models/Itinerary.js";

const createItinerary = async (req, res, next) => {
  try {
    const newItinerary = await Itinerary.create(req.body);
    return res.status(201).json({
      message: "Itinerary created successfully",
      response: newItinerary
    });
  } catch (error) {
    next(error);
  }
};

export { createItinerary };
