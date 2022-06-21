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
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    books?.slice(0, 3).map(book => <Science book={book}></Science>)
                }
            </div>
            <marquee direction="left" className='w-full mt-24' >
                <h1 className='text-4xl text-green-600'> Here i will add notice and latest news</h1>
            </marquee>
        </div>
    );
};

export default Books;