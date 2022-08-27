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

module.exports = {
  create,
};