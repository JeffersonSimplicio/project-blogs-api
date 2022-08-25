const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
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