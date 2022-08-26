const { User } = require('../database/models');
// const jwt = require('jsonwebtoken');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return {
      code: 400,
      message: { message: 'Invalid fields' },
    };
  }
}

module.exports = {
  login,
};