import express, { Response, Request, Router } from "express";
import multer from "multer";

import {
  CreateUserController,
  AuthUserController,
  DetailsUserController,
  CreateCategoryController,
  ListCategoryController,
  CreateProductController,
  ListByCategoryController,
  CreateOrderController,
  RemoveOrderController,
  AddItemController,
  RemoveItemController,
  SendOrderController,
  ListOrderController,
  DetailsOrderController,
  FinishOrderController,
} from "./controllers";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- Routes users --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailsUserController().handle);

// -- Routes Category --

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- Routes Products --

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

// -- Routes Order --

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/item", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/item",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get(
  "/orders/detail",
  isAuthenticated,
  new DetailsOrderController().handle
);
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { router };
