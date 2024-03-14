const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
// const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
// set path image
app.use(express.static(path.join(__dirname, "public")));
// midderwear
app.use(morgan("combined"));
// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log(`>>> PATH: ${path.join(__dirname)}`);
// router
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/page", (req, res) => {
  res.render("page");
});

// listen
app.listen(port, () => {
  console.log(`>>> App running in port ${port}`);
});
