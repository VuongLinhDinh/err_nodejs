import Blog from "../models/blog_model.js";
// function
class BlogController {
  // GET /Blogs
  getAllBlogs(req, res) {
    res.send("All Blogs");
  }
  // GET /Blogs/:id
  getBlogDetail(req, res) {
    res.send("Blog detail");
  }
  // POST /Blogs
  createBlog(req, res) {
    res.send("create Blog");
  }
  // PUT /Blogs/:id
  updateBlog(req, res) {
    res.send("update Blog");
  }
  // delete /Blogs/:id
  deleteBlog(req, res) {
    res.send("delete Blog");
  }
}
export default BlogController;
