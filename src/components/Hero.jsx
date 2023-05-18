import React from 'react'
import { BsFillCircleFill} from "react-icons/bs";
import { HiOutlinePlay} from "react-icons/hi";
const Hero = () => {
  return (
    <section className='h-[90vh] grid md:grid-cols-8 mt-2'>
        <div className=' md:col-span-5 flex items-center justify-center px-3 lg:p-16'>
            <div className=' flex flex-col gap-10'>
                <h1 className='text-7xl font-bold leading-tight lg:leading-[8rem]'>We Design Impactful <br /> Digital <span className=' text-purple-600 lg:p-4 lg:border-8 lg:border-purple-600 relative'>Products
                <BsFillCircleFill className='text-4xl absolute left-[-7%] top-[-15%] text-white ring-8 ring-purple-600 rounded-full hidden lg:inline-block'/>
                <BsFillCircleFill className='text-4xl absolute left-[-7%] top-[85%]  text-white ring-8 ring-purple-600 rounded-full hidden lg:inline-block'/>
                <BsFillCircleFill className='text-4xl absolute left-[95%] top-[85%]  text-white ring-8 ring-purple-600 rounded-full hidden lg:inline-block'/>
                <BsFillCircleFill className='text-4xl absolute left-[95%] top-[-15%]  text-white ring-8 ring-purple-600 rounded-full hidden lg:inline-block'/>
                </span></h1>
                <p className=' text-gray-500 text-2xl leading-6 '>Help find solutions with intuitive and in accordance with client business goals. we provide high-quality services.</p>
                <div className=' flex items-center gap-10 px-4'>
                    <button className=' bg-purple-600 text-white px-8 py-2 rounded-xl text-xl'>Contact Us</button>
                    <button className=' flex items-center gap-2 text-left'><HiOutlinePlay className=' text-4xl text-purple-600 bg-purple-100 rounded-full'/>Watch our <br/> introduction video</button>
                </div>
            </div>
        </div>
        <div className='md:col-span-3 flex items-center justify-center'>
            <img src="hero.png" alt=""/>
        </div>
    </section>
  )
}

export default Hero