import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='fixed w-full  z-50'>
      <div className='container mx-auto text-white  border-b border-neutral-600 drop-shadow-xl flex items-center justify-between p-4 px-5 rounded-3xl'>
        <h1 className='text-2xl font-extrabold text-white'>
          Contact <span className='text-xl font-extralight'>Manager</span>
        </h1>
        <nav className='flex items-center space-x-6'>
          <Link to="/" className='hover:scale-90 transition'>Home</Link>
          <Link to="/about" className='hover:scale-90 transition'>About</Link>
          <Link to="/login" className='hover:scale-90 transition'>Login</Link>
          <Link to="/signup" className='hover:scale-90 transition'>Sign Up</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navber
