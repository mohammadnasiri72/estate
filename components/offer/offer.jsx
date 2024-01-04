import React, { useState } from 'react'

export default function Offer() {
    const[email , setEmail] = useState("")
    const joinHandler = async ()=>{
        const response = await fetch("http://localhost:4000/newsLetters" , {
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({ email })
        })
        if (response.status===201) {
            setEmail("")
            alert("successfully joined")
        }
        
    }
    return (
        <div className='py-20'>
            <div className='bg-color-black bg-black h-5'></div>
            <div className='box-reserve bg-cover bg-blend-multiply bg-no-repeat flex flex-wrap flex-col justify-center items-center py-20'>
                <p className='text-7xl font-bold text-amber-800 text-center'>50% OFF</p>
                <p className='text-4xl font-bold text-white mt-5 text-center'>Sunday Special Offer</p>
                <p className='text-white mt-5 text-center'>Only for Sunday from 1st Jan to 30th Jan 2045</p>
                <div className='flex justify-center mt-5 text-center'>
                    <input onChange={(e)=> setEmail(e.target.value)} className='border-none outline-none text-black w-2/3 p-3' type="text" placeholder='Your Email' />
                    <button onClick={joinHandler} className='bg-amber-800 w-1/3 p-3 duration-300 hover:bg-amber-900'>Join</button>
                </div>
            </div>
            <div className='bg-color-white bg-black h-5'></div>
        </div>
    )
}
