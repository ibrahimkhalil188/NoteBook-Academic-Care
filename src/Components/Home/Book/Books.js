import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Science from './Science';
const Books = ({ group }) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/Books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                books?.slice(0, 3).map(book => <Science book={book}></Science>)
            }
        </div>
    );
};

export default Books;