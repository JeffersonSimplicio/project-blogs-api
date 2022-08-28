const postServices = require('../services/postServices');

async function create(req, res) {
  const { title, content, categoryIds } = req.body;
  const { user } = res.locals;
  const post = await postServices.create({
    title,
    content,
    categoryIds,
    userId: user.id,
  }); 
  res.status(201).json(post);
}

async function getAll(req, res) {
  const result = await postServices.getAll();
  res.status(200).json(result);
}

module.exports = {
  create,
  getAll,
};