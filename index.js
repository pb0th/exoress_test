const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("welcome to my app");
});
app.listen(9000, () => {
  console.log("app running on port 9000");
});
