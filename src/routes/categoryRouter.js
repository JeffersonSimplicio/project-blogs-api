const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const { validationCategory } = require('../middlewares/validationCategory');
const categoryController = require('../controller/categoryController');

router.use(validateJWT);

router.post(
  '/',
  rescue(validationCategory),
  rescue(categoryController.create),
);
router.get('/', categoryController.getAll);

module.exports = router;