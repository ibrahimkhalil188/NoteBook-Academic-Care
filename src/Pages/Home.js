import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Admission from '../Components/Home/Admission';
import Books from '../Components/Book/Books';
import Course from '../Components/Home/Course';
import HeroSection from '../Components/Home/HeroSection';
import Success from '../Components/Home/Success';
import { GiBookmarklet } from 'react-icons/gi';
import { useState } from 'react';
import SuccessSummary from '../Components/Home/SuccessSummary';
const Home = () => {
    const [group, setGroup] = useState("science")
    return (
        <div >
            <HeroSection></HeroSection>
            <Course></Course>
            <Success></Success>
            <Admission></Admission>
            <div>
                <nav className='relative'>
                    <div className='justify-center'>
                        <div>
                            <GiBookmarklet className='text-8xl absolute top-[-20px] left-[20%] lg:left-[62%] rotate-12 '></GiBookmarklet>
                            <h1 className='text-3xl lg:text-5xl  text-center my-8 uppercase font-serif '>Our books</h1>
                        </div>
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
            <Books group={group}></Books>
            <SuccessSummary></SuccessSummary>

        </div>
    );
};

export default Home;