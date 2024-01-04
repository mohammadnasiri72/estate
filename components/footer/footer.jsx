import React from 'react'
import { FaLocationDot, FaLinkedinIn } from "react-icons/fa6";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className='bg-color-black bg-black h-5'></div>
            <div className='footer'>
                <div className='flex flex-wrap text-white px-10'>
                    <div className='lg:w-1/4 sm:w-1/2 w-full px-3 mt-5'>
                        <p className='text-2xl font-bold'>Get In Touch</p>
                        <div className='flex items-center mt-5'>
                            <FaLocationDot className='mx-3' />
                            <p>123 Street, New York, USA</p>
                        </div>
                        <div className='flex items-center mt-5'>
                            <FaPhone className='mx-3' />
                            <p>+012 345 67890</p>
                        </div>
                        <div className='flex items-center mt-5'>
                            <IoMdMail className='mx-3' />
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className='lg:w-1/4 sm:w-1/2 w-full px-3 mt-5'>
                        <p className=' text-2xl font-bold'>Follow Us</p>
                        <p className='mt-2'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <div className='flex flex-wrap mt-5'>
                            <FaTwitter className='mx-1 p-2 text-5xl cursor-pointer border border-white duration-300 hover:bg-white hover:text-black' />
                            <FaInstagram className='mx-1 p-2 text-5xl cursor-pointer border border-white duration-300 hover:bg-white hover:text-black' />
                            <FaLinkedinIn className='mx-1 p-2 text-5xl cursor-pointer border border-white duration-300 hover:bg-white hover:text-black' />
                            <FaFacebookF className='mx-1 p-2 text-5xl cursor-pointer border border-white duration-300 hover:bg-white hover:text-black' />
                        </div>
                    </div>
                    <div className='lg:w-1/4 sm:w-1/2 w-full px-3 mt-5'>
                        <p className='text-2xl font-bold'>Open Hours</p>
                        <p className='mt-2'>Monday - Friday</p>
                        <p className='mt-2'>8.00 AM - 8.00 PM</p>
                        <p className='mt-2'>Saturday - Sunday</p>
                        <p className='mt-2'>2.00 PM - 8.00 PM</p>
                    </div>
                    <div className='lg:w-1/4 sm:w-1/2 w-full px-3 mt-5'>
                        <p className='text-2xl font-bold'>Newsletter</p>
                        <p className='mt-5'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <div className='flex justify-center mt-5'>
                            <input className='border-none outline-none text-black w-2/3 p-3' type="text" placeholder='Your Email' />
                            <button className='bg-amber-800 w-1/3 p-3 duration-300 hover:bg-amber-900'>Sign Up</button>
                        </div>
                    </div>
                </div>
                <hr className='mt-3' />
                <p className='text-center text-white mt-2'>Copyright © <span className='text-amber-800'>Domain</span>. All Rights Reserved.</p>
                <p className='text-center text-white mt-2'>Designed by <span className='text-amber-800'>HTML Codex</span></p>
            </div>
        </>
    )
}
