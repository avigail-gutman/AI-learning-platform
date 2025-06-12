module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,     
      autoIncrement: true,          
      primaryKey: true              
    },
    name: {
      type: DataTypes.STRING,      
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,      
      allowNull: false
    }
  }, {
    tableName: 'users',           
    timestamps: false               
  });

  User.associate = (models) => {
    User.hasMany(models.Prompt, {   
      foreignKey: 'user_id'
    });
  };

  return User;
};
