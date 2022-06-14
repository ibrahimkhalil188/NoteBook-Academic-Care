import React from 'react';
import Admission from '../Components/Home/Admission';
import Course from '../Components/Home/Course';
import HeroSection from '../Components/Home/HeroSection';
import Success from '../Components/Home/Success';

const Home = () => {
    return (
        <div >
            <HeroSection></HeroSection>
            <Course></Course>
            <Success></Success>
            <Admission></Admission>
            <Success></Success>
        </div>
    );
};

export default Home;