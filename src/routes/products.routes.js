import { Router } from "express";
import { methods as productsController } from "../controllers/products.controller";

const router = Router();

// metodo para separar rutas de logica
router.get("/category", productsController.getCatergory);
router.get("/products", productsController.getProducts);
router.get("/products/energy", productsController.getProductsEnergy);
router.get("/products/pisco", productsController.getProductsPisco);
router.get("/products/ron", productsController.getProductsRon);
router.get("/products/beverage", productsController.getProductsBeverage);
router.get("/products/snack", productsController.getProductsSnack);
router.get("/products/beer", productsController.getProductsBeer);
router.get("/products/vodka", productsController.getProductsVodka);

export default router;