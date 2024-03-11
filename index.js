const express = require("express");
const app = express();
const port = 3000;

// router
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// listen
app.listen(port, () => {
  console.log(`-- App running in port ${port}`);
});
