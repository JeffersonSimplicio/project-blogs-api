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

async function getAll() {
  const categories = await Category.findAll();
  return categories;
}

async function getByIds(ids) {
  const users = await Category.findAll({
    where: {
      Id: ids,
    },
  });
  return users;
}

module.exports = {
  create,
  getAll,
  getByIds,
};