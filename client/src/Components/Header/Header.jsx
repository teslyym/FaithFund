import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Header = () => {
  return (
    <div id='header' className='sectiona fixed z-40 w-full bg-white top-0 flex items-center text-[#001712] px-[7vw] py-2 justify-between'>
        <Link to={'/'}> <img src= {logo} className='w-[5vw]' alt="" /></Link>
        <div className='flex items-center gap-6'>
        <div className='flex gap-6'>
        <Link to={'/'} href="" className='hover:underline'>Home</Link>
        <Link to={'About'} href="" className='hover:underline'>About Us</Link>
        <Link to={'/Donate'} href="" className='hover:underline'>Donate</Link>
        <Link to={'/Contact'} href="" className='hover:underline'>Contact</Link>
        <Link to={''} href=""> <img src= {search} alt="" /></Link>
        </div>
        <div className=' bg-[#CCE3DE] w-[1px] h-10'></div>
        <Link to={'/register'} href="" className='hover:underline'>Register</Link>
        <Link to={'/Login'} href="" className='py-2 px-4 bg-[#017358] text-white rounded-lg'>Login</Link>
        </div>

    </div>
  )
}

export default Header