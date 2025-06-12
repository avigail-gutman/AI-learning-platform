const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');

router.post('/', promptController.createPrompt);
router.get('/history/:userId', promptController.getUserHistory);
router.get('/', promptController.getPromptsByFilter);

module.exports = router;