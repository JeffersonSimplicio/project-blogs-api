const express = require('express');

const router = express.Router();

const rescue = require('../utils/rescue');

const validateJWT = require('../middlewares/auth/validateJWT');
const validation = require('../middlewares/validationIndex');
const { categoryChecking } = require('../middlewares/categoryChecking');
const postController = require('../controller/postCrontroller');

router.use(validateJWT);

router.post(
  '/',
  rescue(validation.createPost),
  rescue(categoryChecking),
  rescue(postController.create),
);

router.get('/', rescue(postController.getAll));
router.get('/:id', rescue(postController.getById));
router.put(
  '/:id',
  rescue(validation.editPost),
  rescue(postController.update),
);

module.exports = router;