
import React from 'react'

export default function Feature() {
  return (
    <div className='flex flex-wrap mt-20 feature px-20'>
        <div className='main-img-feature bg-no-repeat bg-cover md:w-1/2 w-full relative'>
            <img className='absolute w-1/2 h-1/2 bottom-0 left-20 object-cover' src="/img/story-1.jpeg" alt="" />
            <img style={{transform:"translateX(-40px)"}} className='object-cover h-1/2 absolute w-5/12 top-10 left-0' src="/img/story-2.jpeg" alt="" />
        </div>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-start sm:pr-20 text-feature mt-10 md:mt-0'>
            <h3 className='text-amber-900'>مشتریان خوشحال</h3>
            <p className='mt-5 text-3xl'>"بهترین تصمیم زندگی ما"</p>
            <p className='mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            <button className='bg-amber-900 px-5 py-2 text-white mt-3'>خانه خود را پیدا کنید</button>
        </div>
    </div>
  )
}
