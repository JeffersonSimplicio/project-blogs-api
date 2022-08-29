const { validator, schemaEditPost } = require('../utils/schema');

function validationEditPost(req, res, next) {
  const { title, content } = req.body;
  
  const result = validator(schemaEditPost, { title, content });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = { validationEditPost };