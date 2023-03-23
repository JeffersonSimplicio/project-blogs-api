const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const tokenGenerator = require('../utils/tokenGenerator');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = tokenGenerator({ email: user.email, user: user.displayName });

      return { token, email: user.email, user: user.displayName, image: user.image };
    }
  }

  return { message: 'User Not Found' };
}

module.exports = {
  login,
};