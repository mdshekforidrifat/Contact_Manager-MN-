import React from 'react'
import Navber from '../component/Navber'
import Hero from "../assets/heroImg.jpg"

const Home = () => {
  return (
    <>
    <Navber/>
    <div className='relative w-full h-screen  flex items-center justify-center'>
        <img className='w-full bg-center h-full object-cover ' src={Hero} alt="" />
        <div className='absolute inset-0 bg-black/60 z-10'></div>
        <div className='absolute flex flex-col items-center justify-center text-white text-center inset-0 z-20'>
            <h1 className='text-4xl font-semibold '>Contact Management Systems</h1>
            <p className='text-base font-medium text-gray-400' >Start collecting your contacts in a very smarter way. We provide a very
            efficient and smarter way to handle contacts.</p>
        </div>
    </div>
    </>
  )
}

export default Home