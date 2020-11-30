const express = require("express");
const shortID = require("shortid");

const server = express();

server.use("*", (req, res) => {
  res.status(404).json({ message: "Error, Not Found" });
});
server.listen(5001, () => {
  console.log("server running on port 5001");
});
