import React from 'react';
import Course from '../Components/Home/Course';
import HeroSection from '../Components/Home/HeroSection';
import Carosuel from '../Components/Shared/Carosuel';

const Home = () => {
    return (
        <div >
            <HeroSection></HeroSection>
            <Course></Course>
            <Carosuel></Carosuel>
        </div>
    );
};

export default Home;