import { Router } from "express";

const router = Router();
//get all of products
router.get("/", (req, res) => {
  res.send("<h2>productos!</h2>");
});
//get of categories
router.get("/categories", (req, res) => {
  res.send("<h2>categorias!</h2>");
});
//get product of a category
router.get("/categories/:categories");
//get product by id
router.get("/:id");

router.post("/");
router.put("/:id");
router.delete("/:id");

export default router;
