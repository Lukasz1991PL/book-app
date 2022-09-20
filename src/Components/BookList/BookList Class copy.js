import React from 'react';

class BookList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => this.props.removeBook(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default BookList;

//1. import react
//2. extends React.Component
//3.Render()
//4. W funkcyjnym podjesciu odbieralismyinfiramcji za pomoca argumentow funkcji w classowych jest to niemozliwe dlatego : bedziemy mieli dostep do rodzica za pomoca wlasciwosci props !!! (dzieki React.component)
//-----------------------------//-
// wiec jesli chce dojsc do jakiegos parametru od rodzica (funkcji albo wartosci )to wchodze przez : this.props
