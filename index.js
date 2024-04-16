import express from "express";
import { create, engine } from "express-handlebars";
import mongoose from "mongoose";
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
import * as dotenv from "dotenv";
import flash from "connect-flash";
import session from "express-session";
import varMiddleware from "./middleware/var.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(flash());
app.use(session({ secret: "Botir", resave: false, saveUninitialized: false }));
app.use(AuthRoutes);
app.use(ProductsRoutes);
app.use(varMiddleware);
const appStart = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const PORT = process.env.PORT || 4100;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

appStart();
