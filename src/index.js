import React from 'react';
import { createRoot } from 'react-dom/client';

// function Greeting(props) {
//   return <h4>TEST</h4>;
// }

function BookList() {
  return <section>
    <Book />
  </section>;
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL906_SR906,600_.jpg" alt="I Love youto the moon and back" />;


const Title = () => <h1>I Love you to the Moon and Back</h1>;

const Author = () => <h4>Amelia Hepworth</h4>;


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);