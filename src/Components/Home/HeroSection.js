import React from 'react';
import banner from '../../Assets/Image/background.jpg'
import heroImage from '../../Assets/Image/heroImage.png'
import Navbar from '../Shared/Navbar';
const HeroSection = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='text-white h-screen'>
            <Navbar></Navbar>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col flex-shrink-0 lg:flex-row-reverse">
                    <img src={heroImage} class=" w-full rounded-lg shadow-2xl" alt='' />
                    <div className='ml-24'>
                        <h1 class="text-6xl font-serif flex-shrink-0 font-bold uppercase leading-lose">empowering students to become scholars</h1>
                        <button class="btn btn-primary mt-6">Get Started</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;