const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const getAllUser = async () => {
  const allUsers = await User.findAll();
  console.log(allUsers.map(user => user.dataValues));
};

const userById = async id => {
  const user = await User.findByPk(id);
  console.log(user.dataValues);
};

// findAll() => some condtion like `where`
// findByPk() => by id
// findOne()

const getUserByIdWithLists = async id => {
  const user = await User.findByPk(id, {
    include: [{ model: TodoList, attributes: ["name"], include: [TodoItem] }],
  });
  console.log(user.get({ plain: true }));
};

getUserByIdWithLists(1);
