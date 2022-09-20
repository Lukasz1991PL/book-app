//komponety classowe i ichh roznice
import React from 'react';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';

import shortid from 'shortid';
//zamiast na funkcji pracujemy na klasie ( classa oparta na specjalnej clasiie reacta )
//1. Import obiektu : import React, { useState } from 'react';
//2. opieramy classe na specjalnej classe react 'React.components' : class Nazwa extends React.components
//3. w komponecie classowym zamiast useState uzywamy state =
//W classach  Nie mozna tworzyc stalych ani zmiennych w ciele classy, zamiast tego tworzymy wlasciwosc bezposrednio w ciele classy jak na przykladzie nizej
//Obiekt state jest : jednym obiektem, ktory moze miec wiele wlasciwoci i danych, ale to JEST JEDEN OBIEKT!

//4. CLASSA MOZE MIEC FUNKCJE ALE MOWIMY WTEDY O METODACH! (USUWAMY CONST)
//5. komponenty classowe pozwalaja na modyfikacje stanu(al nie mamy funkcji pomocniczych typu useState useEffect ) nie mamy wiec mozliwosci modyfikacji tylko czesci stanu ( np. tylko ksiazek) MAMY TYLKO JEDNA FUNKCJE KTORA POZWLA NA ZMIANE CALOSCI STANU ! TA FUNKCJA TO this.setState (metoda dziedziczona z classy bazowej React.components
//6. Dodajemy Wlasciwosc "books" w funkcjach - czyli books:
//7. nie mozna wpisywac return w ciele classy, dlatego uzywamy classe renderi to ona bedzie traktowana jako widoknaszego komponentu
///8. Trzeba zdefiniowac books za pomoca this ( w funkcjach oraz przy przekazaniu komponentu BookList books={this.state.books} )
//9. z metodami tak samo trzeba doidac this. zeby moc wejsc do instancji

class App extends React.Component {
  state = {
    books: [
      { id: 1, title: 'Man', author: 'John ' },
      { id: 2, title: 'Women', author: 'Ann' },
    ],
  };

  removeBook = (bookId) => {
    this.setState({
      books: this.state.books.filter((book) => book.id !== bookId),
    });
  };
  addBook = (newBook) => {
    this.setState({
      books: [
        ...this.state.books,
        { id: shortid(), title: newBook.title, author: newBook.author },
      ],
    });
  };
  render() {
    return (
      <div className='App'>
        <h1>Book App</h1>
        <BookList books={this.state.books} removeBook={this.semoveBook} />
        <BookForm addBook={this.addBook} />
      </div>
    );
  }
}
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
