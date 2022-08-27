const { Category } = require('../database/models');

async function create(name) {
  const [category, created] = await Category.findOrCreate({
    where: { name },
    defaults: { name },
  });

  if (!created) {
    return { message: 'Category already registered' };
  }

  return category;
}

module.exports = {
  create,
};