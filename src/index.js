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
  // attribute, eventHandler, state
  //onClick, onMouseOver 
  const btnHandler = (e) => {
    console.log(e.target);
    alert('You clicked me!');
  };
  const complexExample = (event, author) => {
    console.log(author);
    console.log(event.target);
  };
  return (
    <article className='book' onMouseOver={ () => {
      console.log(title);
    } }>
      <img src={ image } alt='text' />
      <h1 onClick={ () => console.log(title) }>{ title }</h1>
      <h4 >{ author }</h4>
      <button type='button' onClick={ btnHandler }>Click Me!</button><br />
      <button type='button' onClick={ (event) => complexExample(event, author) }>more complex button</button>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);