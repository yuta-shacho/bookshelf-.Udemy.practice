import { Timestamp } from "bson";
import { Schema, model } from "mongoose";
const bookSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
      get: function (val) {
        return Math.round(val);
      },
      set: function (val) {
        return Math.round(val);
      },
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Book = model("Book", bookSchema);
export default Book;
