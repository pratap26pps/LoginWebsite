import React from 'react'
import pankaj from '../photo/pankaj.JPG'
export const Home = () => {
  return (
  <div>
    <div className=' text-white flex justify-center items-center h-full '>Home</div>
    <p className='text-white ml-4 mr-2 lg:ml-80 '>Hello everyone! this is a mini project using React.js and Tailwindcss of wev dev...</p>
    <div  className=' flex flex-col h-12 w-44  mt-24 ml-24 lg:ml-0 lg:mr-20 scale-95 lg:scale-0'>
    <img  src={pankaj} alt='home'>
    </img>
    </div>

   



    </div>
  )
}
export default Home;