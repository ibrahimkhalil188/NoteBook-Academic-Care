import React from 'react';
import { Link } from 'react-router-dom';

const Science = ({ book }) => {
    return (
        <div>

            {
                book ? <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={book?.image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <Link to={`preview/:${book.id}`} class="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div> : ""
            }
        </div>
    );
};

export default Science;