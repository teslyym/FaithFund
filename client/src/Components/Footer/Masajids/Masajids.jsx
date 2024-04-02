import React from 'react'
import MasajidsCard from './MasajidsCard'
import data from './data'

const Masajids = () => {
  return (
    <div>
        <h1>Masajids (mosques) in need of donations</h1>
        <div className='grid grid-cols-4 gap-6'>
         {data.map((Masajids, index) => (
            <MasajidsCard key={index} title={Masajids.title} button={Masajids.button} id={Masajids.id} />
            ))}

        </div>
    </div>
  )
}

export default Masajids