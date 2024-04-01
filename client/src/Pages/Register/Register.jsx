import React from 'react'
import Header from '../../Components/Header/Header' 
import Footer from '../../Components/Footer/Footer'
import logo from '../../Components/../assets/logo.png'

const Register = () => {
  return (
    <div>
      <div>
        <div className='items-start'>
          <img className='w-[94px] h-[80px] ml-[10%] mt-10' src={logo} alt="" />
        </div>
        <div className='rounded-lg w-[462px] h-[1105px] justify-center ml-[30%] mb-10 top-32 left-60 items-center gap-6 p-2'>
        <div className='text-4xl w-[82%] items-center font-medium'>
          <p>Register An Account</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Register