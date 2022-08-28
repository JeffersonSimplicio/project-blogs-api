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

async function getById(req, res) {
  const { id } = req.params;
  const result = await postServices.getById(id);
  if (result.message) {
    return res.status(404).json(result);
  }
  res.status(200).json(result);
}

module.exports = {
  create,
  getAll,
  getById,
};