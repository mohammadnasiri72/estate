import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function Services({services}) {
    console.log(services);
    return (
        <>
            <div className='h-28 flex mt-20'>
                <div className='border-amber-800 border-r-2 w-1/2'></div>
            </div>
            <div className='text-amber-900 text-center text-3xl mt-2'>Our Services</div>
            <div className='text-6xl text-center font-bold mt-2'>Fresh & Organic Beans</div>
            <div className='flex flex-wrap px-10 pb-10'>
                {
                    services.map((e) => {
                        const { img, icon, title, description, id } = e
                        return (
                            <div key={id} className='lg:w-1/2 w-full flex flex-wrap mt-5'>
                                <div className='sm:w-1/3'>
                                    <img className='w-full' src={img} alt="" />
                                </div>
                                <div className='sm:w-2/3 px-2 py-4'>
                                    <div className='flex items-center'>
                                        <div className='text-xl p-3 bg-amber-700 rounded-full mx-2 w-10 h-10 flex justify-center items-center'>
                                            <FontAwesomeIcon
                                            icon={Icons[icon]}
                                            />
                                            {/* {id === 1 ? <FaTruck /> : id === 2 ? <FaCoffee /> : id === 3 ? <FaMedal /> : id === 4 ? <FaTable /> : ""} */}
                                        </div>

                                        <p className='text-xl font-bold'>{title}</p>
                                    </div>
                                    <p className='sm:w-2/3 ml-6 mt-2 text-black-50'>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
