module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,      // מזהה ייחודי למשתמש
      autoIncrement: true,          // עולה אוטומטית
      primaryKey: true              // מפתח ראשי
    },
    name: {
      type: DataTypes.STRING,       // שם המשתמש
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,       // טלפון של המשתמש
      allowNull: false
    }
  }, {
    tableName: 'users',             // שם הטבלה במסד הנתונים
    timestamps: false               // לא מוסיף createdAt/updatedAt אוטומטית
  });

  User.associate = (models) => {
    User.hasMany(models.Prompt, {   // למשתמש יש הרבה prompts (היסטוריית למידה)
      foreignKey: 'user_id'
    });
  };

  return User;
};
