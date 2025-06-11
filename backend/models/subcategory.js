module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    id: {
      type: DataTypes.INTEGER,      // מזהה ייחודי לתת-קטגוריה
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,       // שם תת-הקטגוריה (למשל: Space)
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,      // מזהה הקטגוריה הראשית
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'sub_categories',
    timestamps: false
  });

  SubCategory.associate = (models) => {
    SubCategory.belongsTo(models.Category, { // כל תת-קטגוריה שייכת לקטגוריה
      foreignKey: 'category_id'
    });
    SubCategory.hasMany(models.Prompt, {    // לכל תת-קטגוריה יש הרבה prompts
      foreignKey: 'sub_category_id'
    });
  };

  return SubCategory;
};
