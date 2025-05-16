const validateUser = (Schema) => [(req, res, next) => {
  const { error } = Schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: error.details.map(err => err.message)
    });
  }


  next();
}
]

export default validateUser;