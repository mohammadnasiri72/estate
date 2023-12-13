import React, { useState } from 'react'
import db from "../../data/db.json"
import Link from 'next/link'

export default function AllHomes() {
    const [page , setPage] = useState(1)
    const data = db.homes
    console.log(data);
    const [home , setHome] = useState(data)
    const endIndex = 6*page
    const startIndex = endIndex - 6
    const keys = ["title","roomCount","meterage","price"]
    const paginateHandler = (index)=>{
        setPage(index+1)
    }
    const search = (e)=>{
        const newHome = data.filter((ev)=> 
        keys.some((key)=> ev[key].toString().includes(e))
        )
        setHome(newHome)
    }
    const sort = (e)=>{
        switch (e) {
            case "room":{
                const newHome = [...home].sort((a,b)=> a.roomCount - b.roomCount)
                setHome(newHome)
                break;
            }
            case "meterage":{
                const newHome = [...home].sort((a,b)=> a.meterage - b.meterage)
                setHome(newHome)
                break;
            }
            case "price":{
                const newHome = [...home].sort((a,b)=> a.price - b.price)
                setHome(newHome)
                break;
            }
            default:{
                setHome(data)
                console.log(home);
                break;
            }
        }
    }
    return (
        <>
        <div className='flex flex-wrap justify-around mt-20 pr-20'>
            <select className='w-36 p-1 mx-2 sm:mt-0 mt-3' onChange={(e)=> sort(e.target.value)}>
                <option value="-1">انتخاب کنید</option>
                <option value="room">براساس تعداد اتاق</option>
                <option value="meterage">براساس متراژ</option>
                <option value="price">براساس قیمت</option>
            </select>
            <input onChange={(e)=> search(e.target.value)} className='w-56 border outline-none border-black rounded-md p-1 mx-2 sm:mt-0 mt-3' placeholder='جستجو...' type="text" />
        </div>
            <div className='pr-20 flex flex-wrap justify-center mt-4'>
                {
                    home.slice(startIndex, endIndex).map((e) => {
                        return (
                            <div key={e.id} className='lg:w-1/4 sm:w-1/3 m-4 border text-center'>
                                <img className='w-full' src={e.img} alt="" />
                                <button style={{ transform: "translateY(-50%)" }} className='bg-slate-800 w-5/6 text-white py-2'>{e.title}</button>
                                <div className='flex mt-4'>
                                    <p className='w-1/2'>مالدیو</p>
                                    <p className='w-1/2'>{e.roomCount} اتاق</p>
                                </div>
                                <div className='flex mt-4'>
                                    <p className='w-1/2'>{e.meterage} متر مربع</p>
                                    <p className='w-1/2'>{e.price} ملیون</p>
                                </div>
                                <Link href={`/homes/${e.id}`}><button className='bg-amber-900 w-full mt-20 py-3 text-white'>مشاهده ملک</button></Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center'>
                {
                    Array.from({ length: Math.ceil(home.length/6) }).map((e, index) => {
                        return (
                            <span key={index} onClick={()=>paginateHandler(index)} className='text-white rounded-full bg-amber-900 p-1 m-1 w-8 h-8 flex justify-center items-center cursor-pointer'>{index + 1}</span>
                        )
                    })
                }
            </div>
        </>
    )
}
