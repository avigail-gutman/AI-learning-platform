const { User, Prompt } = require('../models');
const { router } = require('../routes/admin');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};

exports.getAllPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.findAll();
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get prompts' });
  }
};
// בדיקה:
// router.get('/test', (req, res) => res.json({ msg: 'admin test ok' }));
