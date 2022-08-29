const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const {
  BlogPost,
  PostCategory,
  User,
  Category,
} = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

async function create({ title, content, categoryIds, userId }) {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId,
    }, { transaction: t });

    const arrayPostCategory = categoryIds.map((category) => ({
        postId: post.id,
        categoryId: category,
    }));

    await PostCategory.bulkCreate(arrayPostCategory, { transaction: t }); 
    return post;
  });
  return result;
}

async function getAll() {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
}

async function getById(id) {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) {
    return { message: 'Post does not exist' };
  }
  return post;
}

async function update({ id, userId, title, content }) {
  const [rowsAffected] = await BlogPost.update({
    title, content,
  },
  { where: { id, userId } });
  if (!rowsAffected) {
    const result = await getById(id);
    if (result.message) return result;
    return { message: 'Unauthorized user' };
  }
  const post = await getById(id);
  return post;
}

async function remove(id, userId) {
  const rowsAffected = await BlogPost.destroy({
    where: { id, userId },
  });
  if (!rowsAffected) {
    const result = await getById(id);
    if (result.message) return result;
    return { message: 'Unauthorized user' };
  }
  return rowsAffected;
}

async function search(quest) {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${quest}%` } },
        { content: { [Op.like]: `%${quest}%` } },
      ],
    },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
}

// search('').then((test) => console.log(test));

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  search,
};