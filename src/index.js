import React from 'react';
import { createRoot } from 'react-dom/client';
import Book from './Book';

// CSS
import './index.css';
import { books } from './books';

function BookList () {
  return (
    <section className='booklist'>
      { books.map(book => <Book key={ book.id } { ...book } />) }
    </section>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);