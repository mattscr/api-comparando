import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//import cors from "cors";
import { settingDotEnv } from "./src/settings/config.js";
import { connectionMongodb } from "./src/settings/db.config.js";

//app
const app = express();
app.disable("x-powered-by");

//PORT
const { port } = settingDotEnv();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors);

//ROUTES
import productRoute from "./src/routes/product.routes.js";
app.get("/", (req, res) => {
  res.send("<h2>pagina principal!</h2>");
});
app.use("/product", productRoute);

//404 not found
app.use((req, res) => {
  res.send("<h2>404</h2>");
});

app.listen(port, async () => {
  await connectionMongodb();
  console.log(`🚀servidor corriendo en puerto ${port}`);
});
