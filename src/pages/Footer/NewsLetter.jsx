import React from 'react'
import Bgimg from "../../assets/bg_newletters.png"

export default function NewsLetter() {
  return (
    <div className="w-full   sm:w-10/12 md:w-10/12 mx-auto lg:w-10/12 rounded-2xl -mt-[450px]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${Bgimg})` }}>
      
   <div className='w-full sm:w-full md:w-full lg:w-10/12  h-64 flex flex-col gap-y-3 justify-center items-center mx-auto'>
   <h1 className='font-baiJamjuree text-white text-center  text-2xl sm:4xl md:text-5xl lg:8xl'>Subscribe to Our Newsletter</h1>
   <p className='text-white text-center font-poppins text-wrap'>  Receive exclusive updates and exciting news straight to your inbox!</p>
    <form  className='relative sm:max-w-lg w-10/12 p-2 sm:p-4 rounded-full  bg-white ' >
     
      <input className='rounded-full focus:outline-none font-poppins p-3' type="text"/>
      <button className='p-2 sm:p-4 sm:px-16  absolute right-2  text-right font-poppins  bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 text-white rounded-3xl' type="text">subscribe</button>
    </form>
   </div>
  </div>
  )
}
