import React, { useState } from 'react'
import Hero from "../assets/heroImg.jpg"
import { Link } from 'react-router-dom'
import Validation from '../component/Validation'

const SignUp = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({

    })

    const handelSubmit = (e)=>{
        e.preventDefault()
        const errs = Validation(values)
        setErrors(errs)
    }

    const handelInput = (e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }
  return (
    <div className='relative w-full h-screen '>
            <img className='w-full bg-center h-full object-cover ' src={Hero} alt="" />
            <div className='absolute inset-0 bg-black/60 z-10'></div>
            <div className='absolute flex items-center justify-center text-white text-center inset-0 z-20'>
                <div className='w-120 border rounded-xl p-10 bg-white/88 text-black'>
                <h1 className='text-2xl mb-5 font-semibold'>Create a account</h1>
                    <form className='gap-2 flex flex-col'onSubmit={handelSubmit}>
                        <div className='flex flex-col gap-1 '>
                            <label className=' font-semibold px-3 flex items-start'>Name:</label>
                        <input
                        onChange={handelInput}
                         className='bg-white border outline-none placeholder:text-gray-500  rounded-lg px-3 py-2' type="text" name='name' placeholder='Enter your name' />
                          {
                            errors.name && <span className='text-sm font-semibold text-red-600 text-center'>{errors.name}</span>
                          }
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label className=' font-semibold px-3 flex items-start'>Email:</label>
                        <input
                        onChange={handelInput}
                         className='bg-white border outline-none placeholder:text-gray-500  rounded-lg px-3 py-2' type="text" name='email' placeholder='Enter your email' />
                          {
                            errors.email && <span className='text-sm font-semibold text-red-600 text-center'>{errors.email}</span>
                          }
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label className=' font-semibold px-3 flex items-start'>Password:</label>
                        <input
                            onChange={handelInput}                        
                        className='bg-white border outline-none placeholder:text-gray-500  rounded-lg px-3 py-2' type="password" name='password' placeholder='Enter your password' />
                         {
                            errors.password && <span className='text-sm font-semibold text-red-600 text-center'>{errors.password}</span>
                          }
                        </div>
                        <button type='submit' className='w-full bg-black text-white font-semibold text-lg rounded-lg px-2 py-2 cursor-pointer mt-3 mb-3'>Sign up</button>
                        <p>Already Sign Up? <Link className='text-blue-500 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default SignUp