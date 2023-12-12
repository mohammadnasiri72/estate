import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='px-28 bg-slate-950 h-64 flex flex-col justify-between items-center py-3'>
        <div className='flex justify-between w-full mt-10'>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>خانه رویایی خود را پیدا کنید</span>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>درخواست پروپوزال</span>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>برنامه اجرا خانه ها</span>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>با ما تماس بگیرید</span>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>ملک خود را ارسال کنید</span>
          <span className='text-white cursor-pointer hover:bg-amber-950 p-2 duration-300'>با ما کار کنید</span>
        </div>
        <p className='text-white'>حقوق مادی و معنوی این سایت برای <span className='text-brown'>محمد نصیری</span> محفوظ میباشد</p>
      </div>
    </>
  )
}
