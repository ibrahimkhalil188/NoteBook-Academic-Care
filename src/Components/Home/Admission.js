import React from 'react';
import image from '../../Assets/Image/background.jpg'
import Success from './Success';
const Admission = () => {
    return (
        <div className='border-4 border-black relative my-24' style={{
            backgroundImage: `url(${'https://img.freepik.com/free-photo/graduation-concept-with-portrait-happy-girl_23-2148201880.jpg?t=st=1655202380~exp=1655202980~hmac=fae9197f1f391dffaf1ea91599cdf00b0005294e8f3adbdcb233c8e8bd33d08a&w=996'})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundBlendMode: "darken",
        }} >

            <div className=' w-1/2 m-6 pt-24 text-center text-black bg-transparent'>
                <h1 className='text-5xl uppercase font-serif font-bold'> Admission going on</h1>
                <h2 className='text-2xl text-left uppercase mx-6 font-serif mt-24 font-b '>Most of the student don't get change because of the best guide line and mentors. so we believe Your deserve the best education</h2>

                <button className='btn btn-primary mt-12' >Admission now</button>
            </div>


        </div>
    );
};

export default Admission;