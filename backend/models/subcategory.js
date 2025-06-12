module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    id: {
      type: DataTypes.INTEGER,      
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,     
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,      
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
    SubCategory.belongsTo(models.Category, { 
      foreignKey: 'category_id'
    });
    SubCategory.hasMany(models.Prompt, {    
      foreignKey: 'sub_category_id'
    });
  };

  return SubCategory;
};
