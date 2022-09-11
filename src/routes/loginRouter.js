const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validation = require('../middlewares/validationIndex');
const loginController = require('../controller/loginController');
const validateJWT = require('../middlewares/auth/validateJWT');

router.post(
  '/',
  rescue(validation.login),
  rescue(loginController.login),
);

router.use(rescue(validateJWT));

router.get('/reconnect', rescue(loginController.reconnect));

module.exports = router; 