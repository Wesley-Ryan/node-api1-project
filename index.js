const express = require("express");
const shortID = require("shortid");

const server = express();

//DB
let db = {
  id: shortID.generate(),
  name: "First User",
  bio: "I was the first user to sign up on this server.",
};

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
server.get("/users", () => {});
//get user by id

//post user

// put/edit user

// delete user

server.use("*", (req, res) => {
  res.status(404).json({ message: "Error, Not Found" });
});
server.listen(5001, () => {
  console.log("server running on port 5001");
});
