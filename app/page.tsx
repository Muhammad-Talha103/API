
import React from 'react'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700']
})
const Home = () => {
  return (
    <div className='flex items-center justify-center '>
        <button className={`${poppins.className} bg-green-800 text-white hover:text-black w-8 h-4 rounded-lg hover:bg-transparent border border-gray-600`}>GET API</button>
    </div>
  )
}

export default Home