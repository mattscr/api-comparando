import express from "express";
import morgan from "morgan";
//import cors from "cors";

//app
const app = express();

//PORT
const PORT = process.env.PORT || 4000;

//ROUTES
import productRoute from "./src/routes/product.routes.js";
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

//MIDDLEWARE
app.use(morgan("dev"));
//app.use(cors);

app.listen(PORT, console.log(`🚀servidor corriendo en puerto ${PORT}`));
