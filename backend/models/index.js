const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// טוען את כל המודלים
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Category = require('./category')(sequelize, Sequelize.DataTypes);
const SubCategory = require('./subcategory')(sequelize, Sequelize.DataTypes);
const Prompt = require('./prompt')(sequelize, Sequelize.DataTypes);

// קשרים בין המודלים

// לכל קטגוריה יש הרבה תתי-קטגוריות
Category.hasMany(SubCategory, { foreignKey: 'category_id' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id' });

// לכל משתמש יש הרבה prompts (היסטוריית למידה)
User.hasMany(Prompt, { foreignKey: 'user_id' });
Prompt.belongsTo(User, { foreignKey: 'user_id' });

// לכל קטגוריה יש הרבה prompts
Category.hasMany(Prompt, { foreignKey: 'category_id' });
Prompt.belongsTo(Category, { foreignKey: 'category_id' });

// לכל תת-קטגוריה יש הרבה prompts
SubCategory.hasMany(Prompt, { foreignKey: 'sub_category_id' });
Prompt.belongsTo(SubCategory, { foreignKey: 'sub_category_id' });

// ייצוא כל המודלים והחיבור ל-DB
module.exports = {
  sequelize,
  User,
  Category,
  SubCategory,
  Prompt
};