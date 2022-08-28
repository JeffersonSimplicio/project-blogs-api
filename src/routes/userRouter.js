const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const { validationUser } = require('../middlewares/validationUser');
const userController = require('../controller/userController');

router.post(
  '/',
  rescue(validationUser),
  rescue(userController.create),
);

router.use(validateJWT);

router.get('/', userController.getAll);
router.get('/:id', userController.getById);

module.exports = router;