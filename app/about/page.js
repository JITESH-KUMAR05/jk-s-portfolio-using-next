import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profilepic from '../../public/professional2.jpg'
import engineer from '../../public/animated/engineer.gif'

const About = () => {
  return (
    <div className='w-full px-20 py-6 '>
      <h1 className=' text-4xl p-5 font-bold '>About me</h1>
      <div className='w-full flex  h-[82vh]  p-5 border rounded-2xl overflow-hidden '>
        <div className="w-1/2 text-xl h-full flex flex-col gap-6 justify-center  px-5">
          <div className=' w-full '>
            <p>As an ambitious engineering student specializing in IT, I bring a versatile skill set and a proactive attitude to the table. My technical proficiency spans Python, JavaScript, HTML, CSS, React.js, Tailwind CSS, Bootstrap CSS, Next.js, and C. Passionate about innovation and continuous learning, I thrive in dynamic environments and am eager to take on new challenges.</p>


          </div>
          <div className=' w-full] ' >
            I am an active member of the senior body of the Geeks for Geeks club at my university and serve as the technical program coordinator for the IEEE SSIT society. Additionally, my selection for the KVS Nationals cricket team reflects my commitment and leadership in sports.
          </div>
          <div className=' w-full ' >
            Driven by a passion for entrepreneurship, I am dedicated to leveraging technology for innovative solutions. Let's connect and explore how my skills and enthusiasm can contribute to your team's success.
          </div>
          <Link className='' href={'https://drive.google.com/file/d/1G6lkdxCgRJlyqSQyVmqrHjQsRXIz9sMj/view?usp=sharing'} target='_blank' ><button class="cursor-pointer w-1/2 inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent ">
            Download CV
          </button></Link>
        </div>
        <div className='w-1/2 lg:mt-[-12rem] '>
          <Image className='w-full' src={engineer}></Image>
        </div>
      </div>

    </div>
  )
}

export default About
