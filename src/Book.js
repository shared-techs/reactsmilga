import React from 'react';

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

export default Book;