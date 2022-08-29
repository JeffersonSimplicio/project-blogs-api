const { validator, schemaNewPost, schemaEditPost } = require('../utils/schema');

function createPost(req, res, next) {
  const { title, content, categoryIds } = req.body;
  
  const result = validator(schemaNewPost, { title, content, categoryIds });

  if (result.message) return res.status(400).json(result);
  
  next();
}

function editPost(req, res, next) {
  const { title, content } = req.body;
  
  const result = validator(schemaEditPost, { title, content });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = {
  createPost,
  editPost,
};