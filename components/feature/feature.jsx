
import React from 'react'

export default function Feature() {
  return (
    <div className='flex h-96'>
        <div className='main-img-feature w-1/2 relative'>
            <img className='absolute w-1/2 bottom-0 left-20' src="/img/story-1.jpeg" alt="" />
            <img style={{transform:"translateX(-40px)"}} className='absolute w-5/12 top-10 left-0' src="/img/story-2.jpeg" alt="" />
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start px-20'>
            <h3 className='text-amber-900'>مشتریان خوشحال</h3>
            <p className='mt-5 text-3xl'>"بهترین تصمیم زندگی ما"</p>
            <p className='mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            <button className='bg-amber-900 px-5 py-2 text-white mt-3'>خانه خود را پیدا کنید</button>
        </div>
    </div>
  )
}
