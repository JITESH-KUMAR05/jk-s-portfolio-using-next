'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import professional1 from '../../public/professional.jpg';
import professional2 from '../../public/professional1.jpg';
import professional3 from '../../public/professional2.jpg';
import Link from 'next/link';

const Hero = () => {
  const images = [professional1, professional2, professional3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to go to the next image
  const nextImageHandler = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Duration should match the animation duration
    }
  };

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImageHandler();
    }, 3000); // Image changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-white lg:w-[98.9vw] flex m-auto gap-8 justify-center items-center md:w-[98.3vw] sm:w-[90vw] lg:h-[91.9vh] md:h-[90vh] sm:h-[80vh]'>
      <div className="italic font-serif text-6xl md:py-14 left w-[40%] h-[80%]">
        <h1 className='font-extrabold flex gap-1'>
          <span className='text-green-400'>He</span>
          <span>ll</span>
          <span>o</span>
          <span>!</span>
        </h1>
        <h1>I am </h1>
        <h1 className='text-7xl text-red-600 font-bold'>Jitesh Kumar</h1>
        <p>I am a Web Developer</p>
        <Link
          className=''
          href={'https://drive.google.com/file/d/1G6lkdxCgRJlyqSQyVmqrHjQsRXIz9sMj/view?usp=sharing'}
          target='_blank'
        >
          <button className="cursor-pointer w-1/2 inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300 focus:bg-transparent mt-[3rem]">
            Download CV
          </button>
        </Link>
      </div>
      <div className="right relative flex items-center w-[40%] h-[80%] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full  p-5 transition-transform duration-500 rounded-3xl ease-in-out ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <Image
              className='w-full h-full object-cover rounded-3xl'
              src={image}
              alt={`Slideshow Image ${index + 1}`}
            />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Hero;
