//1. Tworzymy jeden obiekt stanu czyli wlasciwosc state:
// 2.Tworzymy metode classy wiec usuwamy const let itd w handlesubmit
// 3. jak chcemy korzystac z metod rodzica to musimy dojsc przez wlasciwosc this.props
//4.Dochodzimy do paraetrow obiektyu state przez this.state

//5. Najwazniejsze z tego podrozdzialu funckja setState:
//a) nadpisuje caly stan - zwraca caly obiekt , dlatego musimy zwrocic wszystko co ten obiekt posiada a nie tylko to co modyfikujemy! Dlatego zuywamy spread gdzie przpisujemy wartosc aktulna plus to co modyfikujemy !

//this.setState({...this.state, title: '' })
//zwraca obiekt z aktualna zawartoscia i pusta zawartsc title - title nadpisuje to co bylo zawarte wczesniej !!!!! wiec jak cos bylo wpisane w title to zniknie !!!
//dzieki tej welacowosci mozemy zmienic wszystkiew walsciwosci naraz:
// this.setState({...this.state, title: '', author: ''  }

//6. Widok : trzeba skorzystac z funkcjoi reneder()

//7. jesli chcemy skorzystac z metid instancji to musze to przygotowac podobnie jesli chcemy skorzysrtac ze stanow:
// render() {
// const { handleSubmit } = this;
//const { title, author } = this.state;

//8. Trzeba tworzyc metody pomocnicze z this:
//setTitle = (value) => this.setState({ ...this.state, title: value });

import React from 'react';
class BookForm extends React.Component {
  state = {
    title: '',
    author: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBook({ title: this.state.title, author: this.state.author });
    this.setState({ ...this.state, title: '', author: '' });
  };
  setTitle = (value) => this.setState({ ...this.state, title: value });
  setAuthor = (value) => this.setState({ ...this.state, author: value });
  render() {
    const { handleSubmit } = this;
    const { title, author } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        title:{''}
        <input
          type='text'
          value={title}
          onChange={(e) => this.setTitle(e.target.value)}
        />
        author:{''}
        <input
          type='text'
          value={author}
          onChange={(e) => this.setAuthor(e.target.value)}
        />
        <button>Add book</button>
      </form>
    );
  }
}

export default BookForm;
