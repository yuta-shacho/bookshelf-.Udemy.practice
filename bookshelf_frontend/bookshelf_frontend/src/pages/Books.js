import { useBooks } from "../contexts/BookContext";

import Card from "../components/Card";

const Books = () => {
  const books = useBooks();

  return (
    <>
      <h2 className="page-title">登録した本の一覧</h2>
      <div className="cards">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
