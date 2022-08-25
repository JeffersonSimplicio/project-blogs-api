const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: DataTypes,
    displayName: DataTypes,
    email: DataTypes,
    password: DataTypes,
    image: DataTypes,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogPosts' });
  };

  return User;
};

module.exports = User;