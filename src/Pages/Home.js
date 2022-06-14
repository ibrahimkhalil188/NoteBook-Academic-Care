import React from 'react';
import Course from '../Components/Home/Course';
import HeroSection from '../Components/Home/HeroSection';
import Success from '../Components/Home/Success';

const Home = () => {
    return (
        <div >
            <HeroSection></HeroSection>
            <Course></Course>
            <Success></Success>
        </div>
    );
};

export default Home;