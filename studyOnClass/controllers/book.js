// function
import Book from "../models/book_model.js";
class BooksController {
  // GET /books
  async getAllBooks(req, res) {
    const books = await Book.find({});
    res.json(books);
  }
  // GET /books/:id
  getBookDetail(req, res) {
    res.send("book detail");
  }
  // POST /books
  createBook(req, res) {
    Book.create({
      title: "Book 2",
      description: "description 2",
      author: "author ",
      image: "image 2",
      price: 1,
      rate: 2
    });
    res.json(Book);
  }
  // PUT /books/:id
  updateBook(req, res) {
    res.send("update book");
  }
  // delete /books/:id
  deleteBook(req, res) {
    res.send("delete book");
  }
}
export default BooksController;
