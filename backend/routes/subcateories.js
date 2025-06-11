const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

router.get('/', subCategoryController.getAllSubCategories);

module.exports = router;