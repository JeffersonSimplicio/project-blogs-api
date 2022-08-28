const Sequelize = require('sequelize');
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
      {
        model: Category,
        as: 'categories',
      },
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
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  if (!post) {
    return { message: 'Post does not exist' };
  }
  return post;
}

module.exports = {
  create,
  getAll,
  getById,
};