module.exports = (sequelize, DataTypes) => {
  const Prompt = sequelize.define('Prompt', {
    id: {
      type: DataTypes.INTEGER,     
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    sub_category_id: {
      type: DataTypes.INTEGER,     
      allowNull: false,
      references: {
        model: 'sub_categories',
        key: 'id'
      }
    },
    prompt: {
      type: DataTypes.TEXT,         
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,        
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,         
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'prompts',
    timestamps: false
  });

  Prompt.associate = (models) => {
    Prompt.belongsTo(models.User, { foreignKey: 'user_id' });
    Prompt.belongsTo(models.Category, { foreignKey: 'category_id' });
    Prompt.belongsTo(models.SubCategory, { foreignKey: 'sub_category_id' });
  };

  return Prompt;
};
