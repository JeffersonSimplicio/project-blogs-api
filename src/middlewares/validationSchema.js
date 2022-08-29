const {
  validator,
  schemaUser,
  schemaNewPost,
  schemaLogin,
  schemaEditPost,
  schemaCategory,
} = require('../utils/schema');

function login(req, res, next) {
  const { email, password } = req.body;
  
  const result = validator(schemaLogin, { email, password });

  if (result.message) return res.status(400).json(result);
  
  next();
}

function user(req, res, next) {
  const { displayName, email, password, image } = req.body;
  
  const result = validator(schemaUser, { displayName, email, password, image });

  if (result.message) return res.status(400).json(result);
  
  next();
}

function category(req, res, next) {
  const { name } = req.body;
  
  const result = validator(schemaCategory, { name });

  if (result.message) return res.status(400).json(result);
  
  next();
}

function newPost(req, res, next) {
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
  login,
  user,
  category,
  newPost,
  editPost,
};