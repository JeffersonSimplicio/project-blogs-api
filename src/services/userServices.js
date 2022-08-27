const tokenGenerator = require('../utils/tokenGenerator');
const { User } = require('../database/models');

async function create({ displayName, email, password, image }) {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password, image },
  });

  if (!created) {
    return { message: 'User already registered' };
  }

  const token = tokenGenerator({ email: user.email, user: user.displayName });
  return token;
}

async function getAll() {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
}

async function getById(id) {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    return { message: 'User does not exist' };
  }
  return user;
}

module.exports = {
  create,
  getAll,
  getById,
};