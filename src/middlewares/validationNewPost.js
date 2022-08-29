const { validator, schemaNewPost } = require('../utils/schema');

function validationNewPost(req, res, next) {
  const { title, content, categoryIds } = req.body;
  
  const result = validator(schemaNewPost, { title, content, categoryIds });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = { validationNewPost };