const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const { validationPost } = require('../middlewares/validationPost');
const { categoryChecking } = require('../middlewares/categoryChecking');
const postController = require('../controller/postCrontroller');

router.use(validateJWT);

router.post(
  '/',
  rescue(validationPost),
  rescue(categoryChecking),
  rescue(postController.create),
);

router.get('/', rescue(postController.getAll));
router.get('/:id', rescue(postController.getById));

module.exports = router;