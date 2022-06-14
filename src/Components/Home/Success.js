import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "../Shared/Carusel.css";
import { Pagination } from "swiper";
const Success = () => {
    const [success, setSuccess] = useState([])
    useEffect(() => {
        fetch("Success.json")
            .then(res => res.json())
            .then(data => setSuccess(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center my-16 uppercase font-serif '>success story</h1>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        success.map(s => <SwiperSlide>
                            <div className='mb-24 shadow-2xl'>
                                <div className='text-left'>
                                    <img src={s.image} alt="" />
                                    <div className='text-xl p-4 border-2'>
                                        <h1>{s.name}</h1>
                                        <h1>{s.university}</h1>
                                        <h1>{s.position}</h1>
                                        <h1>{s.department}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Success;