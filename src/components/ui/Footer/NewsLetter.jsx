import React from 'react'
import Bgimg from "../../../assets/bg_newletters.png"

export default function NewsLetter() {
  return (
    <div className="w-full sm:w-10/12 md:w-10/12 mx-auto lg:w-10/12 rounded-2xl -mt-[450px]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${Bgimg})` }}>
      
   <div className='w-full sm:w-full md:w-full lg:w-10/12  h-64 flex flex-col gap-y-3 justify-center items-center '>
   <h1 className='text-white font-poppins text-xl sm:3xl md:text-4xl lg:5xl'>Subscribe to Our Newsletter</h1>
   <p className='text-white text-center font-poppins text-wrap'>  Receive exclusive updates and exciting news straight to your inbox!</p>
    {/* <form className='w-[20rem]sm:w-[39rem]  p-4 bg-white rounded-full' >
     
      <input className='w-[25rem] focus:outline-none font-poppins p-3' type="text"/>
      <button className='p-3 w-48 text-right font-poppins  bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 text-white rounded-3xl' type="text">subscribe</button>
    </form> */}
   </div>
  </div>
  )
}
