import React from 'react'

export default function Menu({ menu }) {
    return (
        <>
            <div className='h-28 flex mt-20'>
                <div className='border-amber-800 border-r-2 w-1/2'></div>
            </div>
            <div className='text-amber-900 text-center text-3xl mt-2'>Menu & Pricing</div>
            <div className='text-6xl text-center font-bold mt-5'>Competitive Pricing</div>
            <div className='pb-10 flex flex-wrap sm:px-20 px-5 mt-10'>
                <div className='lg:w-1/2 w-full mt-5'>
                    <p className='sm:text-5xl text-3xl font-bold mt-10'>Hot Coffee</p>
                    {
                        menu.filter((item)=> item.type=== "hot").splice(0,3)
                        .map((e) => {
                            const { id, title, desc, img, price } = e
                            return (
                                <div key={id} className='flex items-center mt-10'>
                                    <div className='sm:w-1/5 w-1/3 relative'>
                                        <img className='w-full rounded-full' src={img} alt="" />
                                        <span style={{ transform: "translate(20% , -20%)" }} className='absolute top-0 right-0 bg-amber-800 rounded-full w-1/6 h-1/6 flex items-center justify-center text-white p-5'>${price}</span>
                                    </div>
                                    <div className='sm:w-4/5 w-2/3 ml-5'>
                                        <p className='text-2xl font-bold whitespace-nowrap'>{title}</p>
                                        <p className='sm:w-2/3'>{desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='lg:w-1/2 w-full mt-5'>
                    <p className='sm:text-5xl text-3xl font-bold mt-10'>Hot Coffee</p>
                    {
                        menu.filter((item)=> item.type === "cold").splice(0,3)
                        .map((e) => {
                            const { id, title, desc, img, price } = e
                            return (
                                <div key={id} className='flex items-center mt-10'>
                                    <div className='sm:w-1/5 w-1/3 relative'>
                                        <img className='w-full rounded-full' src={img} alt="" />
                                        <span style={{ transform: "translate(20% , -20%)" }} className='absolute top-0 right-0 bg-amber-800 rounded-full w-1/6 h-1/6 flex items-center justify-center text-white p-5'>${price}</span>
                                    </div>
                                    <div className='sm:w-4/5 w-2/3 ml-5'>
                                        <p className='text-2xl font-bold whitespace-nowrap'>{title}</p>
                                        <p className='sm:w-2/3'>{desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
