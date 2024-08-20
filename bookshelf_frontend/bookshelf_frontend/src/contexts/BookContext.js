import { useEffect, useContext, createContext, useReducer } from "react";

import bookApi from "../api/book";

// 本の追加・更新・削除・初期化のコンテキスト
const BookContext = createContext();
const BookDispatchContext = createContext();

// 他のファイルからstateを参照できるようにエクスポート
const useBooks = () => useContext(BookContext);
const useDispatchBooks = () => useContext(BookDispatchContext);

const reducer = (books, action) => {
  switch (action.type) {
    case "book/init":
      return action.books;

    case "book/add":
      return [action.book, ...books];

    case "book/delete":
      return books.filter((_book) => _book._id !== action.book._id);

    case "book/update":
      const updatedBooks = books.filter(
        (_book) => _book._id !== action.book._id
      );
      updatedBooks.unshift(action.book);
      return updatedBooks;

    default:
      return books;
  }
};

const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(reducer, []);

  // 初期化
  useEffect(() => {
    bookApi.getAll().then((_books) => {
      dispatch({ type: "book/init", books: _books });
    });
  }, []);

  return (
    <BookContext.Provider value={books}>
      <BookDispatchContext.Provider value={dispatch}>
        {children}
      </BookDispatchContext.Provider>
    </BookContext.Provider>
  );
};

export { useBooks, useDispatchBooks, BookProvider };
