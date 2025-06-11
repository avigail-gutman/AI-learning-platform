const { SubCategory } = require('../models');

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.findAll();
    res.json(subCategories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get sub-categories' });
  }
};