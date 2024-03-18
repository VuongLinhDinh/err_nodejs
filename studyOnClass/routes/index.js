import blogsRouter from "./blogs.js";
import booksRouter from "./books.js";
import categorisRouter from "./categoris.js";
import productsRouter from "./products.js";
// import productsRouter from "./products.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/books", booksRouter);
  app.use("/categoris", categorisRouter);
  app.use("/blogs", blogsRouter);
  app.use("/products", productsRouter);
}
