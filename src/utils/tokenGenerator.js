const jwt = require('jsonwebtoken');

function tokenGenerator({ email, user }) {
  const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(
    { email, user },
    secret,
    jwtConfig,
  );

  return token;
}

module.exports = tokenGenerator;