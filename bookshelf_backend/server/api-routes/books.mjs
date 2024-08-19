import express from "express";
import Book from "../models/book.mjs";

const router = express.Router();

// /api/books
router.get("/", async (req, res) => {
  const books = await Book.find().sort({ updatedAt: -1 });
  res.json(books);
});

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const books = await Book.find({ _id: _id });
  res.json(books);
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  await Book.deleteOne({ _id: _id });
  res.json({ msg: "Delete succeeded." });
});

router.post("/", async (req, res) => {
  const body = req.body;
  const book = new Book(req.body);
  const newBook = await book.save();
  res.json(newBook);
});

router.patch("/:id", async (req, res) => {
  const { title, description, comment, rating } = req.body;
  const _id = req.params.id;
  const book = await Book.findById(_id);
  if (title !== undefined) {
    book.title = title;
  }

  if (description !== undefined) {
    book.description = description;
  }

  if (comment !== undefined) {
    book.comment = comment;
  }

  if (rating !== undefined) {
    book.rating = rating;
  } //送らせてきたのがかけてても値を更新できるようにする処理
  await book.save();
  res.json(book);
});

export default router;
