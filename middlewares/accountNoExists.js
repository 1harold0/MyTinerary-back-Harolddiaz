import Users from "../models/User.js";

export default async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "this user not exist"
      });
    }
    req.user = user;
    return next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message
    });
  }
};
