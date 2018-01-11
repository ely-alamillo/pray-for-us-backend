module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Post.associate = (models) => {
    models.Post.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false,
      }
    });
  };

  return Post;
};