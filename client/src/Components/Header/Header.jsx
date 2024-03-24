import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Header = () => {
  return (
   <>
   <div className='section'>

    <div className='sectiona'>
        <a href=""> <img src= {logo} alt="" /></a>
        <a href="">Home</a>
        <a href="">Donate</a>
        <a href="">Contact</a>
        <a href=""> <img src= {search} alt="" /></a>
        <hr />
        <a href="">Register</a>
        <a href="">Login</a>

    </div>

   </div>
   </>
  )
}

export default Header