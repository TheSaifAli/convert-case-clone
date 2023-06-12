import React from 'react'

const Login = (props) => {
  return (
    <div>
        <form className=' bg-white shadow-2xl py-5 w-80 mx-auto rounded-lg flex flex-col justify-center items-center my-20'>
            <input className='border-2 w-72 h-10 rounded-lg px-2 focus:outline-none focus:ring-green-800 focus:ring-2 focus:border-none invalid:focus:outline-none invalid:focus:ring-2 invalid:focus:ring-red-800 ' type={props.type} placeholder={props.placeholder} />
            <input className='border-2 w-72 h-10 rounded-lg px-2 mt-3 focus:outline-none focus:ring-green-800 focus:ring-2 focus:border-none ' type='password' placeholder='password' />
            <input className='border-2 w-72 h-10 rounded-lg px-2 mt-6 bg-red-700 text-white font-semibold text-lg border-none active:bg-red-800  ' type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default Login
