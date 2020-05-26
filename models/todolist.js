"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoList = sequelize.define(
    "todoList",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  todoList.associate = function (models) {
    todoList.belongsTo(models.user);
    todoList.hasMany(models.todoItem);
  };
  return todoList;
};

// 1 todoList belongs 1 user
// 1 user has many todoLists
