import booksRouter from "./books.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/books", booksRouter);
}
