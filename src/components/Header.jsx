import React, {useState} from 'react'
import { BsFillCircleFill } from "react-icons/bs";
import { HiMenuAlt2, HiX} from "react-icons/hi";
const Header = () => {
    const[showMenu, setShowMenu] = useState(false);
    return (
    <header className='flex w-full items-center p-4 h-[10vh] justify-between xl:justify-start pl-6 pr-1'>
        <div className='w-1/6 text-center'>
            <a href='#' className='text-2xl font-bold relative bg-white'>POWER
            <span className='text-5xl text-purple-600'>.</span><BsFillCircleFill className='absolute -left-3 -bottom-3 text-purple-600 -z-10'/></a>
        </div>
        <nav className={`fixed bg-white w-full h-full right-0 top-0 lg:static flex flex-col lg:flex-row text-center gap-10 justify-center ${showMenu ? "left-0" : "-left-full"} transition-all ease-in-out duration-500 z-20`}>
            <span className=' flex flex-row-reverse'>
            <button onClick={() => setShowMenu(!showMenu)} className=' inline-block text-3xl lg:invisible'><HiX/></button>
            </span>
            <div className='flex flex-col w-full h-full gap-10 lg:flex-row justify-center lg:items-end text-2xl'>
            <a href="#" className=''>Home</a>
            <a href="#" className=''>About Us</a>
            <a href="#" className=''>Services</a>
            <a href="#" className=''>Products</a>
            </div>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className=' text-3xl p-2 lg:hidden'>
            <HiMenuAlt2/>
        </button>
    </header>
  )
}

export default Header