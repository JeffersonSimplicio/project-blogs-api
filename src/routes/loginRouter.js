const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const { validationLogin } = require('../middlewares/validationLogin');
const loginController = require('../controller/loginController');

router.post(
  '/',
  rescue(validationLogin),
  rescue(loginController.login),
);

module.exports = router; 