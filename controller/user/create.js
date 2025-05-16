import User from "../../models/User.js";

const createUsers = async (req, res, next) => {
  try {
    let userInfo =req.body
    const newUser = await User.create(userInfo);
    return res.status(201).json({
      message: "user created successfully",
      response: newUser
    });
  } catch (error) {
    next(error);
  }
};

export { createUsers };
