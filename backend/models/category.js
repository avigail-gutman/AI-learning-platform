module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,      // מזהה ייחודי לקטגוריה
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,       // שם הקטגוריה (למשל: Science)
      allowNull: false
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });

  Category.associate = (models) => {
    Category.hasMany(models.SubCategory, { // לקטגוריה יש הרבה תתי-קטגוריות
      foreignKey: 'category_id'
    });
    Category.hasMany(models.Prompt, {      // לקטגוריה יש הרבה prompts
      foreignKey: 'category_id'
    });
  };

  return Category;
};
