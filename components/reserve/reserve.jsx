import React, { useState } from 'react'
import { MdDone } from "react-icons/md";



export default function Reserve() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [date , setData] = useState("")
    const [time , setTime] = useState("")
    const [person , setPerson] = useState("")
    const reserveHandler = async () => {
        const response = await fetch("http://localhost:4000/reserve", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name , email , date , time , person })
        })
        if (response.status===201) {
            setName("")
            setEmail("")
            setData("")
            setTime("")
            setPerson("")
            alert("successfully reservation")
        }
    }
    return (
        <div className='py-20 w-5/6 mx-auto'>
            <div className='bg-color-black bg-black h-5'></div>
            <div className='box-reserve bg-cover bg-blend-multiply bg-no-repeat flex flex-wrap'>
                <div className='lg:w-1/2 w-full flex flex-col justify-center px-10 py-10'>
                    <p className='text-amber-800 text-6xl font-bold'>30% OFF</p>
                    <p className='text-white text-4xl font-semibold mt-5'>For Online Reservation</p>
                    <p className='text-white mt-5'>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                    <div className='flex items-center mt-5'>
                        <MdDone className='text-3xl text-amber-800' />
                        <p className='text-white'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <MdDone className='text-3xl text-amber-800' />
                        <p className='text-white'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <MdDone className='text-3xl text-amber-800' />
                        <p className='text-white'>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full bg-[#33211d] flex flex-col items-center justify-center px-10 py-10'>
                    <p className='text-white text-4xl font-bold text-center'>Book Your Table</p>
                    <input onChange={(e)=> setName(e.target.value)} className='bg-transparent border-2 border-amber-800 outline-none px-5 py-2 w-full text-white mt-3 focus:shadow-amber-800 focus:shadow-sm duration-300' type="text" placeholder='Name' value={name} />
                    <input onChange={(e)=> setEmail(e.target.value)} className='bg-transparent border-2 border-amber-800 outline-none px-5 py-2 w-full text-white mt-3 focus:shadow-amber-800 focus:shadow-sm duration-300' type="text" placeholder='Email' value={email} />
                    <input onChange={(e)=> setData(e.target.value)} className='bg-transparent border-2 border-amber-800 outline-none px-5 py-2 w-full text-white mt-3 focus:shadow-amber-800 focus:shadow-sm duration-300' type="date" placeholder='Date' value={date} />
                    <input onChange={(e)=> setTime(e.target.value)} className='bg-transparent border-2 border-amber-800 outline-none px-5 py-2 w-full text-white mt-3 focus:shadow-amber-800 focus:shadow-sm duration-300' type="time" placeholder='Time' value={time} />
                    <select onChange={(e)=> setPerson(e.target.value)} className='bg-transparent border-2 border-amber-800 outline-none px-5 py-2 w-full text-white  mt-3 focus:shadow-amber-800 focus:shadow-sm duration-300' name="" id="" value={person}>
                        <option className='text-black' value="Person">Person</option>
                        <option className='text-black' value="1">1</option>
                        <option className='text-black' value="2">2</option>
                        <option className='text-black' value="3">3</option>
                        <option className='text-black' value="4">4</option>
                        <option className='text-black' value="5">5</option>
                    </select>
                    <button onClick={reserveHandler} className='w-full bg-amber-800 mt-3 py-4 duration-300 hover:bg-amber-700'>Book Now</button>
                </div>
            </div>
            <div className='bg-color-white bg-black h-5'></div>
        </div>
    )
}
