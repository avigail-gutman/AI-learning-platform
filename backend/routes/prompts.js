const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');

router.post('/', promptController.createPrompt);
router.get('/history/:userId', promptController.getUserHistory);

module.exports = router;