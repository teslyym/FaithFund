import React from 'react'
import masjid from '../../../assets/masjid.png'

const MasajidsCard = ({title, image, button}) => {
  return (
    <div className='w-[24px]'>
    <img src={masjid} alt={title} />
    <h3>{title}</h3>
    <button className='bg-[#017358] rounded '>Donate</button>
    
</div>
  )
}

export default MasajidsCard