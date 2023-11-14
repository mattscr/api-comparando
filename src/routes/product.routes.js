import { Router } from "express";
import {
  controllerCreateProduct,
  controllerListProduct,
  controllerGetProductId,
  controllerUpdateProduct,
  controllerDeleteProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

//get all of products
productRouter.get("/", controllerListProduct, (req, res) => {
  res.send("<h2>productos!</h2>");
});
//get product by id
productRouter.get("/:id", controllerGetProductId);
//create product
productRouter.post("/", controllerCreateProduct);
productRouter.put("/:id", controllerUpdateProduct);
productRouter.delete("/:id", controllerDeleteProduct);

export default productRouter;
