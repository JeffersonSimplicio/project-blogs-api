const { User } = require('../database/models');
const tokenGenerator = require('../utils/tokenGenerator');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }

  const token = tokenGenerator({ email: user.email, user: user.displayName });

  return { token };
}

module.exports = {
  login,
};