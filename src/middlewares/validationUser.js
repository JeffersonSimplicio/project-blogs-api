const { validator, schemaUser } = require('../utils/schema');

function user(req, res, next) {
  const { displayName, email, password, image } = req.body;
  
  const result = validator(schemaUser, { displayName, email, password, image });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = {
  user,
};