const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Category = require('./category')(sequelize, Sequelize.DataTypes);
const SubCategory = require('./subcategory')(sequelize, Sequelize.DataTypes);
const Prompt = require('./prompt')(sequelize, Sequelize.DataTypes);


Category.hasMany(SubCategory, { foreignKey: 'category_id' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Prompt, { foreignKey: 'user_id' });
Prompt.belongsTo(User, { foreignKey: 'user_id' });

Category.hasMany(Prompt, { foreignKey: 'category_id' });
Prompt.belongsTo(Category, { foreignKey: 'category_id' });

SubCategory.hasMany(Prompt, { foreignKey: 'sub_category_id' });
Prompt.belongsTo(SubCategory, { foreignKey: 'sub_category_id' });

module.exports = {
  sequelize,
  User,
  Category,
  SubCategory,
  Prompt
};