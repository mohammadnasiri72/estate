import React from 'react'

export default function Testimonialmone({ comments }) {
    return (
        <>
            <div className='h-28 flex mt-20'>
                <div className='border-amber-800 border-r-2 w-1/2'></div>
            </div>
            <div className='text-amber-900 text-center text-3xl mt-2'>Testimonial</div>
            <div className='text-6xl text-center font-bold mt-2'>Our Clients Say</div>
            <div className='w-5/6 mx-auto mt-3 pb-10'>
                {
                    comments.slice(0,4).map((item) => {
                        const { id, username, productID, body, profile } = item
                        return (
                            <div key={id}>
                                <div className='flex items-center'>
                                    <img className='w-28' src={profile} alt="" />
                                    <div className='ml-5'>
                                        <p className='text-3xl font-semibold'>{username}</p>
                                        <p className='text-black-50'>{productID}</p>
                                    </div>
                                </div>
                                <p className='text-black-50 mt-2'>{body}</p>
                            </div>

                        )
                    })
                }


            </div>
            {/* <div className='w-5/6 mx-auto mt-3'>
                <div className='flex items-center'>
                    <img className='w-28' src={"/img/testimonial-2.jpg"} alt="" />
                    <div className='ml-5'>
                        <p className='text-3xl font-semibold'>Client Name</p>
                        <p className='text-black-50'>Profession</p>
                    </div>
                </div>
                <p className='text-black-50 mt-2'>Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div> */}
            {/* <div className='w-5/6 mx-auto mt-3'>
                <div className='flex items-center'>
                    <img className='w-28' src={"/img/testimonial-3.jpg"} alt="" />
                    <div className='ml-5'>
                        <p className='text-3xl font-semibold'>Client Name</p>
                        <p className='text-black-50'>Profession</p>
                    </div>
                </div>
                <p className='text-black-50 mt-2'>Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div> */}
            {/* <div className='w-5/6 mx-auto mt-3 mb-20'>
                <div className='flex items-center'>
                    <img className='w-28' src={"/img/testimonial-4.jpg"} alt="" />
                    <div className='ml-5'>
                        <p className='text-3xl font-semibold'>Client Name</p>
                        <p className='text-black-50'>Profession</p>
                    </div>
                </div>
                <p className='text-black-50 mt-2'>Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div> */}
        </>
    )
}
