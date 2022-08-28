const categoryServices = require('../services/categoryServices');

async function categoryChecking(req, res, next) {
  const { categoryIds } = req.body;
  const categories = await categoryServices.getByIds(categoryIds);
  if (categoryIds.length !== categories.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
}

module.exports = { categoryChecking };