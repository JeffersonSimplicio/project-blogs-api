const { login } = require('./validationLogin');
const { user } = require('./validationUser');
const { category } = require('./validationCategory');
const { createPost, editPost } = require('./validationPost');

module.exports = {
  login,
  user,
  category,
  createPost,
  editPost,
};