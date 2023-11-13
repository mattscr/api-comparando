import { Schema, model } from "mongoose";

const SupermercadoSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    minLength: 1,
    maxLength: 50,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  ubicacion: String,
  logo_img: {
    type: String,
  },
});

const ProductSchema = new Schema({
  producto_id: {
    type: Number,
    unique: true,
  },
  nombre_producto: String,
  categoria: {
    type: String,
    required: true,
    enum: ["lacteos", "cereales", "aceites"],
  },
  img_product: {
    type: String,
    required: true,
  },
});

export const ProductModel = model("Product", ProductSchema);
