const { Prompt } = require('../models');
const aiService = require('../services/aiService');

exports.createPrompt = async (req, res) => {
  try {
    const { user_id, category_id, sub_category_id, prompt } = req.body;
    const response = await aiService.sendPromptToAI(prompt);
    const newPrompt = await Prompt.create({
      user_id,
      category_id,
      sub_category_id,
      prompt,
      response,
      created_at: new Date()
    });
    res.status(201).json(newPrompt);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create prompt' });
  }
};

exports.getUserHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const prompts = await Prompt.findAll({ where: { user_id: userId } });
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user history' });
  }
};

exports.getPromptsByFilter = async (req, res) => {
  try {
    const { user_id, category_id, sub_category_id } = req.query;
    const where = {};
    if (user_id) where.user_id = user_id;
    if (category_id) where.category_id = category_id;
    if (sub_category_id) where.sub_category_id = sub_category_id;

    const prompts = await Prompt.findAll({ where });
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get prompts' });
  }
};