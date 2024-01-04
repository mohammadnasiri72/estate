import Link from 'next/link'
import { TiThMenuOutline } from "react-icons/ti";
import { FaSortDown , FaCaretRight } from "react-icons/fa";
import React, { useState } from 'react'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [showPages, setShowPages] = useState(false)
  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }
  const showAccordionPages = () => {
    setShowPages(!showPages)
  }
  const menuItemHandler = () => {
    setShowMenu(false)
    setShowPages(false)
  }
  return (
    <div className='bg-neutral-900 lg:bg-transparent lg:absolute w-full z-10'>
      <div className='flex flex-wrap justify-between items-center px-10 py-5 w-full'>
        <Link className='sm:text-5xl text-3xl font-bold text-white' href={"/"}>Next-Coffee</Link>
        <div className='justify-center lg:flex hidden'>
          <Link onClick={menuItemHandler} className='mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300' href={"/"}>Home</Link>
          <Link onClick={menuItemHandler} className='mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300' href={"/about"}>About</Link>
          <Link onClick={menuItemHandler} className='mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300' href={"/services"}>Service</Link>
          <Link onClick={menuItemHandler} className='mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300' href={"/menu"}>Menu</Link>
          <div className='relative'>

            <span onClick={showAccordionPages} className='flex mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>pages <FaSortDown /></span>
            <div style={{ display: showPages ? "block" : "none" }} className='py-2 bg-white absolute mt-2'>
              <Link onClick={menuItemHandler} href={"/reservation"}><p className='text-black mx-2 px-2 hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>Reservation</p></Link>
              <Link onClick={menuItemHandler} href={"/testimonial"}><p className='text-black mx-2 px-2 hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>Testimonial</p></Link>
            </div>
          </div>
          <Link onClick={() => setShowMenu(false)} className='mx-2 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300' href={"/contact"}>Contact</Link>
        </div>
        <div onClick={showMenuHandler} className='lg:hidden block'><TiThMenuOutline className='text-white text-3xl cursor-pointer' /></div>
      </div>
      <div style={{ maxHeight: showMenu ? "300px" : "0" }} className='duration-300 px-10 overflow-hidden lg:hidden block'>
        <p className='my-1 py-1'><Link onClick={menuItemHandler} className='my-1 py-1 px-2 text-white hover:text-amber-900 duration-300' href={"/"}>Home</Link></p>
        <p className='my-1 py-1'><Link onClick={menuItemHandler} className='my-1 py-1 px-2 text-white hover:text-amber-900 duration-300' href={"/about"}>About</Link></p>
        <p className='my-1 py-1'><Link onClick={menuItemHandler} className='my-1 py-1 px-2 text-white hover:text-amber-900 duration-300' href={"/services"}>Service</Link></p>
        <p className='my-1 py-1'><Link onClick={menuItemHandler} className='my-1 py-1 px-2 text-white hover:text-amber-900 duration-300' href={"/menu"}>Menu</Link></p>
        <div className='relative flex'>
          <span onClick={showAccordionPages} className='flex items-center my-1 py-1 px-2 text-white hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>pages <FaCaretRight /></span>
          <div style={{ display: showPages ? "block" : "none" , transform: "translateX(60%)" }} className='py-2 bg-white absolute top-0'>
            <Link onClick={menuItemHandler} href={"/reservation"}><p className='text-black mx-2 px-2 hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>Reservation</p></Link>
            <Link onClick={menuItemHandler} href={"/testimonial"}><p className='text-black mx-2 px-2 hover:text-amber-900 focus:text-amber-900 duration-300 cursor-pointer'>Testimonial</p></Link>
          </div>
        </div>
        <p className='my-1 py-1'><Link onClick={menuItemHandler} className='my-1 py-1 px-2 text-white hover:text-amber-900 duration-300' href={"/contact"}>Contact</Link></p>
      </div>
    </div>
  )
}
