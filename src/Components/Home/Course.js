import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseDetails from './CourseDetails';

const Course = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("Course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mt-12'>
            <h1 className='text-5xl uppercase text-center font-serif my-12'>Available Courses</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    courses?.map(course => <CourseDetails course={course} id={course.id} ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Course;