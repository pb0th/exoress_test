const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("welcome");
});
app.listen(9000, () => {
  console.log("app running on port 3000");
});
