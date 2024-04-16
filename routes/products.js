import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "BShop | Home",
  });
});

router.get("/products", (req, res) => {
  res.render("products",{
    title: "BShop | Products",
    isProduct: true
  });
});

router.get("/add", (req, res) => {
  res.render("add",{
    title: "BShop | Add",
    isAdd: true
  });
});

export default router;
