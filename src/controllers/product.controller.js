import { ProductModel } from "../models/product.models.js";

//controller create product
export const controllerCreateProduct = async (req, res) => {
  try {
    const newProduct = await ProductModel.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controller listar productos
export const controllerListProduct = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({}, "-__v");
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
