import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Science from './Science';
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom';
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
            <Link to='allBooks' className='text-primary font-bold text-2xl flex justify-center items-center mt-6 absolute right-16'>See more <BsArrowRight className='text-2xl ml-2 mt-2 font-extrabold '></BsArrowRight></Link>

        </div>
    );
};

export default Books;