const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const tokenGenerator = require('../utils/tokenGenerator');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  const match = await bcrypt.compare(password, user.password);

  if (!user || !match) {
    return { message: 'Invalid fields' };
  }

  const token = tokenGenerator({ email: user.email, user: user.displayName });

  return { token, email: user.email, user: user.displayName, image: user.image };
}

module.exports = {
  login,
};