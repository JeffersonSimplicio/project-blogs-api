const joi = require('joi');

const schemaLogin = joi.object().keys({
  email: joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  password: joi.string().min(6).required().messages({
    'string.empty': 'Some required fields are missing',
  }),
});

const schemaUser = joi.object().keys({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string().required(),
});

const schemaCategory = joi.object().keys({
  name: joi.string().required(),
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
  schemaUser,
  schemaCategory,
};