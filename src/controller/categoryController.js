const categoryServices = require('../services/categoryServices');

async function create(req, res) {
  const { name } = req.body;

  const result = await categoryServices.create(name);
  if (result.message) {
    return res.status(409).json(result);
  }
  res.status(201).json(result);
}

module.exports = {
  create,
};