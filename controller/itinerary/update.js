import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Itinerary.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Itinerary not found" });
    return res.status(200).json({
      message: "Itinerary updated successfully",
      response: updated
    });
  } catch (error) {
    next(error);
  }
};
export { updateItinerary };