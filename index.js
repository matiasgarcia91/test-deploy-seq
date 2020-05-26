const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;
const cors = require("cors");

// First thing to do app.use on.
app.use(cors());

app.use(express.json());

app.get("/users", async (req, res, next) => {
  try {
    console.log("request recieved!");
    const users = await User.findAll();
    console.log("users fetched from db", users);

    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", async (req, res, next) => {
  console.log("id to look for", req.params);
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send("No user found with that id");
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

app.patch("/users/:id", async (req, res, next) => {
  console.log("id to look for", req.params.id);
  console.log("newName to change", req.body);
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send("No user found with that id");
    } else {
      const { name } = req.body;
      await user.update({ name });
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => console.log("server up!"));
