import React from 'react'
import data from "./../../data/db.json"
import Link from 'next/link';

export default function Gallery() {
    console.log(data.homes);
  return (
    <div className='flex flex-wrap justify-center mt-20 pr-20'>
        {
            data.homes.slice(0 , 6).map((e)=>{
                return(
                    <div key={e.id} className='lg:w-1/4 sm:w-1/3 m-4 border text-center'>
                        <img className='w-full' src={e.img} alt="" />
                        <button style={{transform:"translateY(-50%)"}} className='bg-slate-800 w-5/6 text-white py-2'>{e.title}</button>
                        <div className='flex mt-4'>
                            <p className='w-1/2'>مالدیو</p>
                            <p className='w-1/2'>{e.roomCount} اتاق</p>
                        </div>
                        <div className='flex mt-4'>
                            <p className='w-1/2'>{e.meterage} متر مربع</p>
                            <p className='w-1/2'>{e.price} ملیون تومان</p>
                        </div>
                        <Link href={`/homes/${e.id}`}><button className='bg-amber-900 w-full mt-20 py-3 text-white'>مشاهده ملک</button></Link>
                    </div>
                )
            })
        }
    </div>
  )
}
