export default async (req, res, next) => {
    try {
      return res.status(200).json({
        success: true,
        message: "Signed in",
        token: req.token,
        user: {
          name: req.user.name,
          photo: req.user.photo
        }
      });
    } catch (error) {
      next(error);
    }
  };
  