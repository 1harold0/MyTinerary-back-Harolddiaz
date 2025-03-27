const bad_request = (error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
      return res.status(400).json({
        success: false,
        message: "Bad Request: Invalid JSON format",
        details: error.message
      });
    }
  
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Bad Request: Validation failed",
        errors: error.errors
      });
    }
  
    next(error); 
  };
  
  export default bad_request;