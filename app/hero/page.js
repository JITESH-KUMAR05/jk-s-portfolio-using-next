import React from 'react'
import Image from 'next/image';
import professional2 from '../../public/professional2.jpg';
const Hero = () => {
  return (
    <div className=' text-white lg:w-[98.9vw] flex m-auto gap-8 justify-center items-center md:w-[98.3vw] sm:w-[90vw] lg:h-[91.9vh] md:h-[90vh] sm:h-[80vh]    '>
      <div className=" italic text-6xl  md:py-14 left w-[40%]  h-[80%]  ">
        <h1 className='  font-extrabold flex gap-1'>
          <span className='text-green-400'>He</span>
          <span>ll</span>
          <span>o</span>
          <span>!</span>
        </h1>
        <h1>I am </h1>
        <h1 className='text-7xl text-red-600 font-bold '>Jitesh Kumar</h1>
        <p>I am a Web Developer </p>

      </div>
      <div className="right w-[40%] h-[80%] overflow-hidden  ">
       <Image className='w-full h-full object-cover'  src={professional2} alt="image Loading ..." />        
      </div>
    </div>
  )
}

export default Hero;
