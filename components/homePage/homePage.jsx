import { useRouter } from 'next/router'
import React from 'react'

export default function HomePage() {
    const router = useRouter()

    return (
        <>
            <div className='home-page flex flex-col justify-center items-center'>
                <p className='text-white text-5xl font-bold'>{router.route === "/about" ? "About US" : router.route === "/services" ? "Services" : router.route === "/menu" ? "Menu" : router.route === "/reservation" ? "Reservation" : router.route === "/testimonial" ? "Testimonial" : router.route === "/contact" ? "Contact" : ""}</p>
                <p className='text-white'>home{router.route}</p>
            </div>
            <div className='bg-black bg-color-white h-2'></div>
        </>
    )
}
