import Category from "../models/category_model.js";
// function
class CategorisController {
  // GET /Categoris
  getAllCategoris(req, res) {
    res.send("All Categoris");
  }
  // GET /Categoris/:id
  getCategoryDetail(req, res) {
    res.send("Category detail");
  }
  // POST /Categoris
  createCategory(req, res) {
    res.send("create Category");
  }
  // PUT /Categoris/:id
  updateCategory(req, res) {
    res.send("update Category");
  }
  // delete /Categoris/:id
  deleteCategory(req, res) {
    res.send("delete Category");
  }
}
export default CategorisController;
