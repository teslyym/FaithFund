import React from 'react'
import MasajidsCard from './MasajidsCard'

const Masajids = () => {
  return (
    <div>
        <h1>Masajids (mosques) in need of donations</h1>
        <div className='grid grid-cols-3'>
         {list.map((Masajids, index) => (
            <MasajidsCard key={index} title={Masajids.title} image={Masajids.image} button={Masajids.button} />
            ))}

        </div>
    </div>
  )
}

export default Masajids