import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector(state => state.books);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
