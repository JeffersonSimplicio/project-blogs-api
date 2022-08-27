const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');

async function validateJWT(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try { 
    const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({
      where: { email: decoded.email, displayName: decoded.user },
    });

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = validateJWT;