const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const validation = require('../middlewares/validationIndex');
const userController = require('../controller/userController');

router.post(
  '/',
  rescue(validation.user),
  rescue(userController.create),
);

router.use(validateJWT);

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.delete('/me', userController.removeMe);

module.exports = router;