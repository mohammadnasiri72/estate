import { useRouter } from 'next/router'
import React from 'react'
import db from "../../../data/db.json"
export default function SingleHome() {
  const router = useRouter()
  const data = db.homes
  const home = data.find((e) => e.id === Number(router.query.homesID))
  return (
    <div className='px-24 py-10'>
      <div className='flex flex-wrap'>
        <div className='sm:w-1/3 w-full'>
          <img className='w-full' src={home?.img} alt="" />
        </div>
        <div className='sm:w-2/3 w-full px-10'>
          <div className='flex flex-wrap justify-around'>
            <p className='text-2xl w-full lg:w-auto'>{home?.title}</p>
            <p className='text-2xl w-full lg:w-auto font-bold'>{home?.price} تومان</p>
          </div>
          <div className='flex mt-3'>
            <button className='bg-green-500 px-3 py-1 mx-1 text-white'>ویژه</button>
            <button className='bg-amber-900 px-3 py-1 mx-1 text-white'>برای اجاره</button>
          </div>
          <p className='mt-2'>آدرس: شیراز میدان ارم</p>
          <div className='flex flex-wrap justify-between mt-3'>
            <p className='font-bold w-full lg:w-auto'>مرور کلی</p>
            <p className=' w-full lg:w-auto'>کد ملک : hgsjg</p>
          </div>
          <hr className='mt-3 border-black'/>
          <div className='mt-3 flex flex-wrap justify-between'>
            <p className='w-full'>نوع ملک : {home?.title}</p>
            <p className='w-full'>اتاق : {home?.roomCount}</p>
            <p className='w-full'>متراژ : {home?.meterage}</p>
            <p className='w-full'>سال ساخت : 1402</p>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <p className='text-2xl font-bold'>توضیحات</p>
        <hr className='mt-3'/>
        <p className='mt-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
    </div>
  )
}
