const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validation = require('../middlewares/validationLogin');
const loginController = require('../controller/loginController');

router.post(
  '/',
  rescue(validation.validationLogin),
  rescue(loginController.login),
);

module.exports = router; 