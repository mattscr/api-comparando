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

//controller list all products
export const controllerListProduct = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({}, "-__v");
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controller get product by id
export const controllerGetProductId = async (req, res) => {
  try {
    const { producto_id } = req.params;
    const product = await ProductModel.findOne({ id: producto_id });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//controller for update
export const controllerUpdateProduct = async (req, res) => {
  try {
    const { producto_id } = req.params;
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { id: producto_id },
      req.body,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//delete product
export const controllerDeleteProduct = async (req, res) => {
  try {
    const { producto_id } = req.params;
    const deletedProduct = await ProductModel.findOneAndDelete({
      id: producto_id,
    });
    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
