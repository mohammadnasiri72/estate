import React from 'react'

export default function Footer() {
  return (
    <>
      <div className=' bg-slate-950  flex flex-col justify-between items-center py-3'>
        <div className='flex flex-wrap justify-between w-full mt-10 pr-28'>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>خانه رویایی خود را پیدا کنید</span>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>درخواست پروپوزال</span>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>برنامه اجرا خانه ها</span>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>با ما تماس بگیرید</span>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>ملک خود را ارسال کنید</span>
          <span className='w-full sm:w-1/2 md:w-1/3 lg:w-auto text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>با ما کار کنید</span>
        </div>
        <p className='text-white mt-5 pr-16 text-xs text-center'>حقوق مادی و معنوی این سایت برای <span className='text-brown'>محمد نصیری</span> محفوظ میباشد</p>
      </div>
    </>
  )
}
