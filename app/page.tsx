
import React from 'react'
import {Poppins} from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700']
})

const Home = () => {
  return (
    <Link href='/api/products' className='flex items-center justify-center h-screen'>
        <button className={`${poppins.className} bg-green-800 font-semibold text-white hover:text-black p-3 rounded-lg hover:bg-transparent border border-gray-600`}>GET API</button>
    </Link>
  )
}

export default Home