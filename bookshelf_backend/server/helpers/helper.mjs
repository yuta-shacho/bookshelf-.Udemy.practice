function requestErrorHandler(contorollers) {
  return async function (req, res, next) {
    try {
      return await contorollers(req, res);
    } catch (err) {
      next(err);
    }
  };
}

export { requestErrorHandler };
