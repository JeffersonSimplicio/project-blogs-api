const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const validation = require('../middlewares/validationUser');
const userController = require('../controller/userController');

router.post(
  '/',
  rescue(validation.validationUser),
  rescue(userController.create),
);

router.use(validateJWT);

router.get('/', userController.getAll);

module.exports = router;