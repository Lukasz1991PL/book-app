//Kazda zmiana w stanie komponentu, wlacza funkcje od nowa!!!

import React from 'react';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
import { useState } from 'react';
import shortid from 'shortid';
const App = () => {
  return (
    <div className='App'>
      <h1>Book App</h1>
      <BookList />
      <BookForm />
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
