const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }

  const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user.email }, secret, jwtConfig);

  return { token };
}

module.exports = {
  login,
};