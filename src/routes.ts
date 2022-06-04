import { Router } from "express";
export const route = Router();

/* ---------------------------------------------------------------- */
import { ProductController } from "./controllers/ProductController";
const productController = new ProductController()
route.post('/product', productController.createProduct)
route.get('/product', productController.findAll)
/* ---------------------------------------------------------------- */
//
//
//
/* ---------------------------------------------------------------- */
import { CategoryController } from "./controllers/CategoryController";
const categoryController = new CategoryController()
route.post('/category', categoryController.createCategory)
route.get('/category', categoryController.findAll)
/* ---------------------------------------------------------------- */
//
//
//
/* ---------------------------------------------------------------- */
import { ProductCategoryController } from "./controllers/ProductCategoryController";
const productCategoryController = new ProductCategoryController()
route.post('/categoryProduct', productCategoryController.createProductCategory)
/* ---------------------------------------------------------------- */
//
//
//
/* ---------------------------------------------------------------- */
import { ProductWithExistCategory } from "./controllers/ProductWithExistsCategory";
const productWithExistCategory = new ProductWithExistCategory()
route.post('/productWithCategory', productWithExistCategory.handle)
/* ---------------------------------------------------------------- */
//
//
//
/* ---------------------------------------------------------------- */
import { FindProductController } from "./controllers/FindProductController";
const findProductController = new FindProductController()
route.get('/product/:id', findProductController.findProduct)
/* ---------------------------------------------------------------- */