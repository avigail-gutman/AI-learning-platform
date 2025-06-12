const express = require('express');
const router = express.Router();
exports.router = router;
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getAllUsers);
router.get('/prompts', adminController.getAllPrompts);

module.exports = router;