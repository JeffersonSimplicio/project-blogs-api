const { validator, schemaPost } = require('../utils/schema');

function validationPost(req, res, next) {
  const { title, content, categoryIds } = req.body;
  
  const result = validator(schemaPost, { title, content, categoryIds });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = { validationPost };