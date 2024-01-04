import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactUS() {
    return (
        <>
            <div className='h-28 flex mt-20'>
                <div className='border-amber-800 border-r-2 w-1/2'></div>
            </div>
            <div className='text-amber-900 text-center text-3xl mt-2'>Contact Us</div>
            <div className='text-6xl text-center font-bold mt-2'>Feel Free To Contact</div>
            <div className='flex flex-wrap pb-10'>
                <div className='sm:w-1/3 w-full flex flex-col justify-center items-center mt-10'>
                    <FaLocationDot className='text-4xl text-amber-700' />
                    <p className='font-bold text-2xl mt-3'>Address</p>
                    <p className='text-black-50 mt-1'>123 Street, New York, USA</p>
                </div>
                <div className='sm:w-1/3 w-full flex flex-col justify-center items-center mt-10'>
                    <FaPhoneAlt className='text-4xl text-amber-700' />
                    <p className='font-bold text-2xl mt-3'>Phone</p>
                    <p className='text-black-50 mt-1'>+012 345 6789</p>
                </div>
                <div className='sm:w-1/3 w-full flex flex-col justify-center items-center mt-10'>
                    <HiOutlineMail className='text-4xl text-amber-700' />
                    <p className='font-bold text-2xl mt-3'>Email</p>
                    <p className='text-black-50 mt-1'>info@example.com</p>
                </div>
            </div>
            <div className='mt-10 flex flex-wrap w-5/6 mx-auto pb-10'>
                <div className='lg:w-1/2 w-full mt-5 px-3'>
                    <iframe className='lg:w-full lg:h-full sm:w-1/2 w-5/6 mx-auto'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.65247298006085!2d51.443934748132335!3d35.74271978951797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03f704929699%3A0x4e906f7b9b8f3ac4!2z2YXYrNiq2YXYuSDZgdmG24wg2KrZh9ix2KfZhg!5e0!3m2!1sfa!2s!4v1670358228335!5m2!1sfa!2s"
                        ></iframe>
                </div>
                <div className='lg:w-1/2 w-full sm:px-20 px-2 mt-5'>
                    <input className='w-full outline-none border px-3 py-2 shadow-sm focus:shadow-amber-800 duration-300 mt-3' type="text" placeholder='Your Name' />
                    <input className='w-full outline-none border px-3 py-2 shadow-sm focus:shadow-amber-800 duration-300 mt-3' type="text" placeholder='Your Email' />
                    <input className='w-full outline-none border px-3 py-2 shadow-sm focus:shadow-amber-800 duration-300 mt-3' type="text" placeholder='Subject' />
                    <textarea className='w-full mt-3 h-36 border outline-none px-3 py-2' placeholder='message'></textarea>
                    <button className='bg-amber-700 px-10 py-4 mt-3 hover:bg-amber-800 duration-300'>Send Message</button>
                </div>
            </div>

        </>
    )
}
