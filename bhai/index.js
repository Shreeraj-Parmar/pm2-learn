const express = require("express");

const app = express();
app.get("/", (req, res) => {
  console.log("Hello World!");

  res.send("Hello World! BHAI");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
