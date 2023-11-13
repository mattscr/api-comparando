import { Router } from "express";
import {
  controllerCreateProduct,
  controllerListProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();
//get all of products
productRouter.get("/", controllerListProduct, (req, res) => {
  res.send("<h2>productos!</h2>");
});
//get of categories
productRouter.get("/categories", (req, res) => {
  res.send("<h2>categorias!</h2>");
});
//get product of a category
productRouter.get("/categories/:categories");
//get product by id
productRouter.get("/:id");

productRouter.post("/", controllerCreateProduct);
productRouter.put("/:id");
productRouter.delete("/:id");

export default productRouter;
