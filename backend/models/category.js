module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,      
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,       
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });

  Category.associate = (models) => {
    Category.hasMany(models.SubCategory, { 
      foreignKey: 'category_id'
    });
    Category.hasMany(models.Prompt, {   
      foreignKey: 'category_id'
    });
  };

  return Category;
};
