import express from "express";
const blogsRouter = express.Router();
import BlogController from "../controllers/blog.js";
const blogController = new BlogController();

blogsRouter.get("/", blogController.getAllBlogs);
blogsRouter.post("/", blogController.createBlog);
blogsRouter.get("/:id", blogController.getBlogDetail);
blogsRouter.put("/:id", blogController.updateBlog);
blogsRouter.delete("/:id", blogController.deleteBlog);
export default blogsRouter;
