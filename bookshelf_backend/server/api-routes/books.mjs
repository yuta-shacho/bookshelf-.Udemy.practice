import express from "express";
import { body } from "express-validator";
import { requestErrorHandler } from "../helpers/helper.mjs";
import {
  getAllBooks,
  getBookById,
  deleteBook,
  registBook,
  updateBook,
} from "../contorollers/books.mjs";

const router = express.Router();

// /api/books
router.get("/", requestErrorHandler(getAllBooks));

router.get("/:id", requestErrorHandler(getBookById));

router.delete("/:id", requestErrorHandler(deleteBook));

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(registBook)
);

//validator.js
router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("comment").optional().notEmpty(),
  body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(updateBook)
);

export default router;
