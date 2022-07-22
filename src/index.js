import React from 'react';
import { createRoot } from 'react-dom/client';

// function Greeting(props) {
//   return <h4>TEST</h4>;
// }

// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love you to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/912F2fID5XL._AC_UL200_SR200,200_.jpg',
    title: 'The 6:20 Man',
    author: 'David Balducci'
  },
  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL200_SR200,200_.jpg',
    title: 'Verity',
    author: 'Colleen Hoover'
  }
];

function BookList () {
  return (
    <section className='booklist'>
      { books.map(book => <Book key={ book.id } { ...book } />) }
    </section>
  );
};

const Book = ({ image, title, author }) => {
  //const { image, title, author } = props;
  return (
    <article className='book'>
      <img src={ image } alt='text' />
      <h1>{ title }</h1>
      <h4 >{ author }</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);