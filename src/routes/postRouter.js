const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const validation = require('../middlewares/validationPost');

router.use(validateJWT);

router.post(
  '/',
  rescue(validation.validationPost),
);

module.exports = router;