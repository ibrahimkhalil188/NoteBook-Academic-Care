import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Science from './Science';

const AllBooks = () => {
    const [group, setGroup] = useState("science")
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/Books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div>
                <nav className='relative'>
                    <div className='justify-center'>

                    </div>
                    <div class="navbar justify-center">
                        <div class="navbar-center">
                            <Link to='science' class="btn btn-ghost normal-case text-xl" onClick={() => setGroup("science")}>Science</Link>
                        </div>
                        <div class="navbar-center">
                            <Link to='commerce' class="btn btn-ghost normal-case text-xl" onClick={() => setGroup("commerce")}>Commerce</Link>
                        </div>
                        <div class="navbar-center">
                            <Link to='general' class="btn btn-ghost normal-case text-xl" onClick={() => setGroup("general")}>General</Link>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    books?.map(book => <Science book={book}></Science>)
                }
            </div>
        </div>
    );
};

export default AllBooks;