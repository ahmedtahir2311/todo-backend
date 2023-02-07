const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const statusCode = res.statusCode ? res.statusCode : 400;
    const missingFields = Object.keys(err.errors).map(
      (field) => field.split(".")[1]
    );
    return res.status(statusCode).json({
      error: `The following fields are missing: ${missingFields.join(", ")}`,
    });
  }
  next(err);
};

module.exports = {
  errorHandler,
};
