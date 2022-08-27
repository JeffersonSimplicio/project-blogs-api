const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const validation = require('../middlewares/validationCategory');
const categoryController = require('../controller/categoryController');

router.use(validateJWT);

router.post(
  '/',
  rescue(validation.validationCategory),
  rescue(categoryController.create),
);
router.get('/', categoryController.getAll);

module.exports = router;