"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const newColumn1 = queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    const newColumn2 = queryInterface.addColumn("todoItems", "todoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todoLists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    return Promise.all([newColumn1, newColumn2]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("todoItems", "todoListId");
    return queryInterface.removeColumn("todoLists", "userId");
  },
};
