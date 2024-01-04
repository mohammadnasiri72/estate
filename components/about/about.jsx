import React from 'react'
import { MdOutlineDone } from "react-icons/md";

export default function AboutUS() {
    return (
        <>
            <div className='h-28 flex mt-20'>
                <div className='border-amber-800 border-r-2 w-1/2'></div>
            </div>
            <div className='text-amber-900 text-center text-3xl mt-2'>About US</div>
            <div className='text-6xl text-center font-bold mt-2'>Serving Since 1950</div>
            <div className='flex flex-wrap justify-between px-10 mt-10'>
                <div className='lg:w-1/3 w-full p-5'>
                    <p className='text-4xl font-bold'>Our Story</p>
                    <p className='mt-2 text-xl'>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                    <p className='text-black-50 mt-2'>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                    <button className='bg-neutral-800 py-2 px-4 text-white mt-14 hover:bg-neutral-900 duration-300 font-semibold'>Learn More</button>
                </div>
                <div className='lg:w-1/3 w-full'>
                    <img className='mx-auto' src={"/img/about.png"} alt="" />
                </div>
                <div className='lg:w-1/3 w-full p-5'>
                    <p className='text-4xl font-bold'>Our Vision</p>
                    <p className='text-black-50 mt-3'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDone className='text-amber-800 text-3xl mr-5' />
                        <p className='text-xl whitespace-nowrap'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDone className='text-amber-800 text-3xl mr-5' />
                        <p className='text-xl whitespace-nowrap'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDone className='text-amber-800 text-3xl mr-5' />
                        <p className='text-xl whitespace-nowrap'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <button className='mt-10 bg-amber-800 py-2 px-4 text-white duration-300 hover:bg-amber-900'>Learn More</button>
                </div>
            </div>
        </>
    )
}
