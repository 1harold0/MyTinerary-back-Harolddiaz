import Itinerary from "../../models/Itinerary.js";

const deleteItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Itinerary.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Itinerary not found" });
    return res.status(200).json({
      message: "Itinerary deleted successfully",
      response: deleted
    });
  } catch (error) {
    next(error);
  }
};

export { deleteItinerary };
