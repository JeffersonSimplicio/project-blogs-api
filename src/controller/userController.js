const userService = require('../services/userServices');

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const result = await userService.create({ displayName, email, password, image });
  if (result.message) {
    return res.status(409).json(result);
  }
  res.status(201).json({ token: result });
}

async function getAll(req, res) {
  const result = await userService.getAll();
  res.status(200).json(result);
}

async function getById(req, res) {
  const { id } = req.params;
  const result = await userService.getById(id);
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