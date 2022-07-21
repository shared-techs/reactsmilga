import React from 'react';
import { createRoot } from 'react-dom/client';

// function Greeting(props) {
//   return <h4>TEST</h4>;
// }

// CSS
import './index.css';
// setup vars
const firstBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love you to the Moon and Back',
  author: 'Amelia Hepworth'
};
const secondBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/912F2fID5XL._AC_UL200_SR200,200_.jpg',
  title: 'The 6:20 Man',
  author: 'David Balducci'
};

function BookList () {
  return <section className='booklist'>
    <Book
      image={ firstBook.image }
      title={ firstBook.title }
      author={ firstBook.author }
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam laborum ipsam a consequatur repellendus dolor molestiae voluptatem eaque alias!</p>
    </Book>
    <Book
      image={ secondBook.image }
      title={ secondBook.title }
      author={ secondBook.author }
    />
  </section>;
};

const Book = ({ image, title, author, children }) => {
  //const { image, title, author } = props;
  return (
    <article className='book'>
      <img src={ image } alt='text' />
      <h1>{ title }</h1>
      <h4 >{ author }</h4>
      { children }
    </article>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);