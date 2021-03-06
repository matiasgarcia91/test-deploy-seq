"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      phone: DataTypes.INTEGER,
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.todoList);
  };
  return user;
};
