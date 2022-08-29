const { validator, schemaCategory } = require('../utils/schema');

function category(req, res, next) {
  const { name } = req.body;
  
  const result = validator(schemaCategory, { name });

  if (result.message) return res.status(400).json(result);
  
  next();
}

module.exports = {
  category,
};