const joi = require('joi');

const schemaLogin = joi.object().keys({
  email: joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  password: joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
});

function validator(schema, body) {
  const negocio = schema.validate(body);
  if (negocio.error) {
    const { message } = negocio.error.details[0];
    return { message };
  }
  const data = negocio.value;
  return { data };
}

module.exports = {
  validator,
  schemaLogin,
};