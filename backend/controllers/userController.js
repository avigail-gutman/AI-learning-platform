const { User } = require('../models');

exports.registerUser = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = await User.create({ name, phone });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};