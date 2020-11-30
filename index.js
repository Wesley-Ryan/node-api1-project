const express = require("express");
const { restart } = require("nodemon");
const shortID = require("shortid");
const CORS = require("cors");

const server = express();
server.use(express.json());
server.use(CORS());
//DB
let db = [
  {
    id: "1",
    name: "First User",
    bio: "I was the first user to sign up on this server.",
  },
];

//Helpers
const User = {
  getAllUsers() {
    return db;
  },
  getUserByID(id) {
    return db.find((user) => user.id === id);
  },
  postUser(user) {
    const newUser = { id: shortID.generate(), name: user.name, bio: user.bio };
    db.push(newUser);
    return newUser;
  },
  editUser(id, changes) {
    const user = this.getUserByID(id);
    if (!user) {
      return null;
    }
    const updatedUser = { id, ...changes };
    db = db.map((user) => {
      if (user.id === id) return updatedUser;
      return user;
    });
    return updatedUser;
  },
  deleteUser(id) {
    const user = this.getUserByID(id);
    if (user) {
      db = db.filter((user) => user.id != id);
    }
    return user;
  },
};
//****End Points ****

//get all users
server.get("/api/users", (req, res) => {
  const users = User.getAllUsers();
  res.status(200).json(users);
});
//get user by id
server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = User.getUserByID(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res
      .status(400)
      .json({ message: "We could not find the requested user :( " });
  }
});

//post user
server.post("/api/users", (req, res) => {
  const clientUser = req.body;
  if (!clientUser.name && !clientUser.bio) {
    res.status(400).json({ message: "User name and Bio required." });
  } else {
    const createdUser = User.postUser(clientUser);
    res.status(201).json(createdUser);
  }
});

// put/edit user
server.put("/api/users/:id", (req, res) => {
  const userChanges = req.body;
  const { id } = req.params;
  const updatedUser = User.editUser(id, userChanges);

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res
      .status(400)
      .json({ message: "We were unable to locate the user with that id :(" });
  }
});

// delete user
server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const deletedUser = User.deleteUser(id);
  if (deletedUser) {
    res.status(200).json(deletedUser);
  } else {
    res
      .status(400)
      .json({ message: "We were unable to delete the requested user :(" });
  }
});

server.use("*", (req, res) => {
  res.status(404).json({ message: "Error, Not Found" });
});
server.listen(5001, () => {
  console.log("server running on port 5001");
});
