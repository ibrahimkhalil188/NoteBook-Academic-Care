import React from 'react';
const Admission = () => {
    return (
        <div className='border-4 border-black relative my-24' style={{
            backgroundImage: `url(${'https://img.freepik.com/free-photo/graduation-concept-with-portrait-happy-girl_23-2148201880.jpg?t=st=1655202380~exp=1655202980~hmac=fae9197f1f391dffaf1ea91599cdf00b0005294e8f3adbdcb233c8e8bd33d08a&w=996'})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundBlendMode: "darken",
        }} >

            <div className='w-full lg:w-1/2 lg:m-6 p-4 pt-6 lg:pt-24 text-center text-black bg-transparent'>
                <h1 className='text-xl  lg:text-5xl uppercase font-serif font-bold'> Admission going on</h1>
                <h2 className='text-xl text-left lg:uppercase lg:mx-6 font-serif my-12 lg:mt-24  '>Most of the student don't get change because of the best guide line and mentors. so we believe Your deserve the best education</h2>

                <a href='#course' className='btn btn-primary lg:my-12 lg:btn-lg' >Admission now</a>
            </div>


        </div>
    );
};

export default Admission;