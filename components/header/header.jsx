import React from 'react'
import { FcBbc } from "react-icons/fc";
import { TfiYoutube } from "react-icons/tfi";
import { BiLogoEtsy, BiLogoEbay } from "react-icons/bi";
import Link from 'next/link';
import SideBar from './sideBar/sideBar';

export default function Header() {
  return (
    <>
    <SideBar />
      <div className=''>
        <div className='flex flex-wrap'>
          <div className='h-auto main-img-header md:w-2/3 w-full bg-slate-800 px-28 bg-no-repeat bg-cover bg-blend-multiply'>
            <div className='flex justify-center items-center py-10'>
              <p className='text-brown text-3xl mx-1'>nexter</p>
              <img className='w-16' src={"/img/favicon.png"} alt="" />
            </div>
            <p className='text-brown'>خانه خودتان :</p>
            <p className='text-white text-2xl font-bold mt-3'>با خرید خانه نهایت آزادی را احساس کنید</p>
            <Link href="/homes"><button className='bg-amber-900 text-white p-3 mt-20 font-bold'>املاک ما را مشاهده کنید</button></Link>
            <div className='flex items-center justify-center'>
              <hr className='w-5/12' />
              <span className='text-white w-1/6 flex justify-center'>دیده میشود در</span>
              <hr className='w-5/12' />
            </div>
            <div className='flex justify-between items-center'>
              <FcBbc className='text-8xl' />
              <TfiYoutube className='text-6xl text-white' />
              <BiLogoEtsy className='text-6xl text-white' />
              <BiLogoEbay className='text-6xl text-white' />
            </div>
          </div>
          <div className='md:w-1/3 w-full bg-slate-900 flex justify-center items-center flex-col py-10'>
            <p className='text-amber-900 text-xl font-semibold'>سه مالک برتر</p>
            <div className='flex items-center mt-4 justify-start w-1/2'>
              <img className='w-16 rounded-full' src={"/img/realtor-1.jpeg"} alt="" />
              <div className='mx-2'>
                <p className='text-white font-bold'>مهدی ایلخانی نصب</p>
                <p className='text-white text-xs'>869 فروش خانه</p>
              </div>
            </div>
            <div className='flex items-center mt-4 justify-start w-1/2'>
              <img className='w-16 rounded-full' src={"/img/realtor-2.jpeg"} alt="" />
              <div className='mx-2'>
                <p className='text-white font-bold'>کوثر بهشتی</p>
                <p className='text-white text-xs'>249 فروش خانه</p>
              </div>
            </div>
            <div className='flex items-center mt-4 justify-start w-1/2'>
              <img className='w-16 rounded-full' src={"/img/realtor-3.jpeg"} alt="" />
              <div className='mx-2'>
                <p className='text-white font-bold'>عرشیا احسنی</p>
                <p className='text-white text-xs'>130 فروش خانه</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
