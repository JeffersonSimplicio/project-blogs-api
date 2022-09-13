function nonExistentRoute(req, res, _next) {
  res.status(404).json({ message: `Route url: ${req.url}, does not exist.` });
}

module.exports = nonExistentRoute;