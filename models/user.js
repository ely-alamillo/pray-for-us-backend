module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'creatorId'
    });
  };

  return User;
};