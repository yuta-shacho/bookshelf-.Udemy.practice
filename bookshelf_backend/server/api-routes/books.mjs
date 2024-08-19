import express from "express";
import { body } from "express-validator";

import {
  getAllBooks,
  getBookById,
  deleteBook,
  registBook,
  updateBook,
} from "../contorollers/books.mjs";

const router = express.Router();

// /api/books
router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.delete("/:id", deleteBook);

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  registBook
);

//validator.js
router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("comment").optional().notEmpty(),
  body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
  updateBook
);

export default router;
