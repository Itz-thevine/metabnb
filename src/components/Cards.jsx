import React from 'react'
import star from '../assets/Frame 59528.png'

const Cards = ({pic}) => {
  return (
    <div className='flex flex-col w-[300px] border-2 border-gray-400 rounded-xl p-3 mt-7'>
        <img src={pic} alt="Desert king" />
        <div className='w-[250px] flex justify-between py-2'>
            <p className='text-sm'>Desert King</p>
            <p className='text-sm font-bold'>1MBT per night</p>
        </div>
        <div className='w-[250px] flex justify-between py-2'>
            <p className='text-xs'>2345km away</p>
            <p className='text-xs'>available for 2weeks stay</p>
        </div>
        <div className='py-2'>
            <img src={star} alt="rating" />
        </div>
    </div>
  )
}

export default Cards