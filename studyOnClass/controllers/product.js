import Product from "../models/product_model.js";
// function
class ProductsController {
  // GET /products
  async getAllProducts(req, res) {
    // const products = await Product.find({});
    // res.json(products);
    res.send("Get product");
  }
  // GET /products/:id
  getProductDetail(req, res) {
    res.send("Product detail");
  }
  // POST /products
  createProduct(req, res) {
    Product.create({
      title: "Product 2",
      description: "description 2",
      image: "image 2",
      price: 1
    });
    res.send("create Product");
  }
  // PUT /products/:id
  updateProduct(req, res) {
    res.send("update Product");
  }
  // delete /products/:id
  deleteProduct(req, res) {
    res.send("delete Product");
  }
}
export default ProductsController;
