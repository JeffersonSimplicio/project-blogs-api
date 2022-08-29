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

async function update(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;
  const { user: { id: userId } } = res.locals;
  const result = await postServices.update({ id, userId, title, content });
  if (result.message) {
    if (result.message.includes('user')) return res.status(401).json(result);
    return res.status(404).json(result);
  }
  res.status(200).json(result);
}

async function remove(req, res) {
  const { id } = req.params;
  const { user: { id: userId } } = res.locals;
  const result = await postServices.remove(id, userId);
  if (result.message) {
    if (result.message.includes('user')) return res.status(401).json(result);
    return res.status(404).json(result);
  }
  res.status(204).end();
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};