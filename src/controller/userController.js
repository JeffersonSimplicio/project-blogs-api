const userService = require('../services/userServices');

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const result = await userService.create({ displayName, email, password, image });
  if (result.message) {
    return res.status(409).json(result);
  }
  res.status(201).json({ token: result });
}

module.exports = {
  create,
};