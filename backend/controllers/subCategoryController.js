const { SubCategory } = require('../models');

exports.getAllSubCategories = async (req, res) => {
  try {
    console.log('req.query:', req.query);
    const { category_id } = req.query;
    let subCategories;
    if (category_id) {
      subCategories = await SubCategory.findAll({ where: { category_id } });
    } else {
      subCategories = await SubCategory.findAll();
    }
    res.json(subCategories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get sub-categories' });
  }
};