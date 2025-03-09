const express = require("express");

const app = express();
app.get("/", (req, res) => {
  console.log("Hello World!",process.env.NODE_ENV);
  res.send("Hello World! Hello 44444");
});
app.listen(4000, () => {
  console.log("Server running on port 3000");
});
