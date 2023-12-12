import { useState } from "react";
import { IoMdMenu, IoMdCloseCircleOutline } from "react-icons/io";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const showMenuHandler = () => {
    setShowMenu(!showMenu)
    if (showMenu) {
      document.body.style.overflow = "auto"
    }else{
      document.body.style.overflow = "hidden"
    }
  }
  return (
    <>
      <div style={{width:showMenu? "50%":"5%"}} className='fixed top-0 bottom-0 right-0 bg-amber-900 flex duration-300 z-10'>
        <IoMdMenu style={{transform: showMenu? "rotate(360deg)" : "rotate(0)" , opacity:showMenu? "0":"1" , visibility: showMenu? "hidden" : "visible"}} onClick={showMenuHandler} className="absolute text-3xl text-white cursor-pointer duration-300 mr-5" />
        <IoMdCloseCircleOutline style={{transform: showMenu? "rotate(0)" : "rotate(360deg)" , opacity:showMenu? "1":"0" , visibility: showMenu? "visible" : "hidden"}} onClick={showMenuHandler} className="text-3xl text-white cursor-pointer duration-300 mr-5" />
        <div style={{display: showMenu? "flex":"none"}} className="flex flex-col justify-around items-center w-full py-32">
          <p className="text-white hover:bg-slate-700 px-3 py-1 rounded-md cursor-pointer duration-300">صفحه اصلی</p>
          <p className="text-white hover:bg-slate-700 px-3 py-1 rounded-md cursor-pointer duration-300">ویژگی ها</p>
          <p className="text-white hover:bg-slate-700 px-3 py-1 rounded-md cursor-pointer duration-300">نظرات</p>
          <p className="text-white hover:bg-slate-700 px-3 py-1 rounded-md cursor-pointer duration-300">خانه ها</p>
          <p className="text-white hover:bg-slate-700 px-3 py-1 rounded-md cursor-pointer duration-300">گالری</p>
        </div>
      </div>
      <div style={{display:showMenu?"block":"none"}} onClick={showMenuHandler} className="bg-dark fixed top-0 bottom-0 right-0 left-0"></div>
    </>
  )
}
export default SideBar
