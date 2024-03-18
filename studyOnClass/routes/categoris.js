import express from "express";
const categorisRouter = express.Router();
import CategoryController from "../controllers/category.js";
const categoryController = new CategoryController();

categorisRouter.get("/", categoryController.getAllCategoris);
categorisRouter.post("/", categoryController.createCategory);
categorisRouter.get("/:id", categoryController.getCategoryDetail);
categorisRouter.put("/:id", categoryController.updateCategory);
categorisRouter.delete("/:id", categoryController.deleteCategory);
export default categorisRouter;
