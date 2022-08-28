const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

async function create({ title, content, categoryIds, userId }) {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId,
    }, { transaction: t });
    console.log('Valor do post: ', post);

    const arrayPostCategory = categoryIds.map((category) => ({
        postId: post.id,
        categoryId: category,
    }));

    await PostCategory.bulkCreate(arrayPostCategory, { transaction: t }); 
    return post;
  });
  return result;
}

module.exports = {
  create,
};