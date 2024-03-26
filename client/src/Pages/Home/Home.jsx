import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import bgimg from '../../assets/bgimg.png'

const Home = () => {
  return (
   <>
   <Header />
    <div>
      <div>
        <img className='relative' src={bgimg} alt="bgimg" />
        <div className='absolute rounded'>
          <p>Help Restore Dilapidated Mosques</p>
          <h1>The Prophet (PBUH) said: “Whoever builds a masjid for the sake of Allah, Allah will build for him a house in Paradise.”</h1>

        </div>
      </div>


    </div>

    <Footer />
   </>
  )
}

export default Home