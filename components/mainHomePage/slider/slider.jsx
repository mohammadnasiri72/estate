import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        (
            <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='home-img1 w-full h-screen bg-blend-multiply text-white flex flex-col justify-center items-center bg-cover bg-no-repeat '>
                        <p className='text-amber-300 sm:text-3xl text-xl'>We Have Been Serving</p>
                        <p className='sm:text-9xl text-4xl font-bold sm:mt-6 mt-2'>COFFEE</p>
                        <p className='sm:text-2xl text-2xl font-bold'>* SINCE 1950 *</p>
                    </div>
                    <div className='bg-black bg-color-white h-5'>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='home-img2 w-full h-screen bg-blend-multiply text-white flex flex-col justify-center items-center bg-cover bg-no-repeat '>
                        <p className='text-amber-300 sm:text-3xl text-xl'>We Have Been Serving</p>
                        <p className='sm:text-9xl text-4xl font-bold sm:mt-6 mt-2'>COFFEE</p>
                        <p className='sm:text-2xl text-2xl font-bold'>* SINCE 1950 *</p>
                    </div>
                    <div className='bg-black bg-color-white h-5'>
                    </div>
                </SwiperSlide>


            </Swiper>
        )
    )
}
