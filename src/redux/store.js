import { createStore } from 'redux';
const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return { ...state, books: books.filter((book) => book.id !==) };
  }
  return state;
};

const initialState = {
  books: [
    { id: 1, title: 'Man', author: 'John ' },
    { id: 2, title: 'Women', author: 'Ann' },
  ],
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
