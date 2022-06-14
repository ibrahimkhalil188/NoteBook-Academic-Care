import React from 'react';

const CourseDetails = ({ course }) => {
    const { name, image, price, numberOfClass, test } = course
    return (
        <div className='border-2 rounded-2xl border-[#0bc8ff]'>
            <div class="card shadow-xl">
                <img className='w-full' src={image} alt="Shoes" />
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h2 class="card-title">{price}</h2>
                    <h2 class="card-title">{numberOfClass}</h2>
                    <h2 class="card-title">{test}</h2>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Admission Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;