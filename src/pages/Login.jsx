import React from 'react'
import Hero from "../assets/heroImg.jpg"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='relative w-full h-screen '>
            <img className='w-full bg-center h-full object-cover ' src={Hero} alt="" />
            <div className='absolute inset-0 bg-black/60 z-10'></div>
            <div className='absolute flex items-center justify-center text-white text-center inset-0 z-20'>
                <div className='w-120 border rounded-xl p-10 bg-white/88 text-black'>
                <h1 className='text-2xl mb-5 font-semibold'>Login Now</h1>
                    <form className='gap-2 flex flex-col' action="">
                        <div className='flex flex-col gap-1 '>
                            <label className=' font-semibold px-3 flex items-start'>Email:</label>
                        <input className='bg-white border outline-none placeholder:text-gray-500  rounded-lg px-3 py-2' type="text" name='name' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label className=' font-semibold px-3 flex items-start'>Password:</label>
                        <input className='bg-white border outline-none placeholder:text-gray-500  rounded-lg px-3 py-2' type="password" name='password' placeholder='Enter your password' />
                        </div>
                        <button className='w-full bg-black text-white font-semibold text-lg rounded-lg px-2 py-2 cursor-pointer mt-3 mb-3'>Login</button>
                        <p>Create a account? <Link className='text-blue-500 font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login