import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import bgimg from '../../assets/bgimg.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <Header />
    <div>
      <div className='relative'>
        <img className='w-full' src={bgimg} alt="bgimg" />
        <div className='absolute flex flex-col gap-4 items-center backdrop-blur-lg bottom-[10%] border border-[rgba(255,255,255,0.3)] right-0 p-10 mr-[6%] rounded-[24px] w-[51%] '>
          <p className='font-bold text-[3rem]'>Help Restore  Dilapidated Mosques</p>
          <h1>The Prophet (PBUH) said: “Whoever builds a masjid for the sake of Allah, Allah will build for him a house in Paradise.”</h1>
          <Link> Donate</Link>
        </div>
      </div>


    </div>

    <Footer />
   </>
  )
}

export default Home