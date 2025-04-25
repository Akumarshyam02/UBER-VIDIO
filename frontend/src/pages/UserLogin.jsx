import React from 'react'
import { Link } from 'react-router-dom'
function UserLogin() {
  return (

    <div className='p-7'>
       <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
<div> <form>

<h3 className='text-lg font-medium mb-2'>Whats your email  </h3>
<input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="email" placeholder="Email@gmail.com" />
<h3 className='text-lg font-medium mb-2'>Enter Password</h3>  
<input  className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="password" placeholder="Password" />
<button  className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base ' type="submit">Login</button></form></div>
  <div>
    {/* <button>Create Account</button> */}
    {/* <Link>Create New Account</Link> */}
    <button className='bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base ' >
      Sign in as a Captain</button>
    </div>    
    
    </div>
  )
}

export default UserLogin