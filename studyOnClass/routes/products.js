import express from "express";
import ProductsController from "../controllers/product.js";
const productsRouter = express.Router();
const productsController = new ProductsController();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.post("/", productsController.createProduct);
productsRouter.get("/:id", productsController.getProductDetail);
productsRouter.put("/:id", productsController.updateProduct);
productsRouter.delete("/:id", productsController.deleteProduct);
export default productsRouter;
