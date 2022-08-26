const { validator, schemaLogin } = require('../utils/schema');

function validationLogin(req, res, next) {
  console.log('Entrou na validação');
  const { email, password } = req.body;
  const result = validator(schemaLogin, { email, password });
  if (result.message) {
    return res.status(400).json(result);
  }
  next();
}

module.exports = { validationLogin };