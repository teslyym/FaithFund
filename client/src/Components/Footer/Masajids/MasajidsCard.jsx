import React from 'react'
import defImg from "../../../assets/masjid.png" 
import { Link } from 'react-router-dom'

const MasajidsCard = ({title='Ar-Rasheed Mosque, Yaba, Lagos', image={defImg}, id='72367'}) => {
  return (
    <div className=''>
    <img src={defImg} alt={title} />
    <p>{title}</p>
    <Link to={`/mosque/${id}`} className='bg-[#017358] rounded '>Details</Link>
    
</div>
  )
}

export default MasajidsCard