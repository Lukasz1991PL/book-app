// //Debbuging
// //* w miejsce gdzie normalnie wstawialibysmy console.log wstawiamy breakpointy
// *breakpoint zatrzymuje kod gdy js na niego trafi
// * pauza daje nam komunikat ze funkcja dziala i zostala wywyolana
// *debbuger sprawdza wartosc argumentu

// 1.Wpisujemy w kodzie slowo : debbuger
// //Kazda zmiana w stanie komponentu, wlacza funkcje od nowa!!!

import React from 'react';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
import { useState } from 'react';
import shortid from 'shortid';
const App = () => {
  console.log('App refreshed ');
  const [books, setBooks] = useState([
    { id: 1, title: 'Man', author: 'John ' },
    { id: 2, title: 'Women', author: 'Ann' },
  ]);

  const removeBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };
  const addBook = (newBook) => {
    setBooks([
      ...books,
      { id: shortid(), title: newBook.title, author: newBook.author },
    ]);
  };
  return (
    <div className='App'>
      <h1>Book App</h1>
      <BookList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />
    </div>
  );
};

export default App;

// const foo = ['one', 'two'];

// foo[0];

// const bar = [
//   { id: 1, title: 'one' },
//   { id: 2, title: 'two' },
// ];

// for (let element of bar) {
//   console.log(element.title);
// }
