const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validation = require('../middlewares/validationIndex');
const loginController = require('../controller/loginController');

router.post(
  '/',
  rescue(validation.login),
  rescue(loginController.login),
);

module.exports = router; 