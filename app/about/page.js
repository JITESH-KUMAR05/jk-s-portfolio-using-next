import React from 'react'
import Image from 'next/image'
import profilepic from '../../public/professional2.jpg'

const About = () => {
  return (
    <div className='w-full px-20 py-6 '>
      <h1 className=' text-4xl p-5 font-bold '>About me</h1>
      <div className='w-full flex h-[80vh] p-5 border overflow-hidden '>
        <div className="w-1/2 text-xl flex flex-col gap-6 justify-center  px-5">
          <div className=' w-full '>
            <p>As an ambitious engineering student specializing in IT, I bring a versatile skill set and a proactive attitude to the table. My technical proficiency spans Python, JavaScript, HTML, CSS, React.js, Tailwind CSS, Bootstrap CSS, Next.js, and C. Passionate about innovation and continuous learning, I thrive in dynamic environments and am eager to take on new challenges.</p>


          </div>
          <div className=' w-full] ' >
            I am an active member of the senior body of the Geeks for Geeks club at my university and serve as the technical program coordinator for the IEEE SSIT society. Additionally, my selection for the KVS Nationals cricket team reflects my commitment and leadership in sports.
          </div>
          <div className=' w-full ' >
            Driven by a passion for entrepreneurship, I am dedicated to leveraging technology for innovative solutions. Let's connect and explore how my skills and enthusiasm can contribute to your team's success.
          </div>
        </div>
        <div className='w-1/2'>
        <Image src={profilepic}></Image>
        </div>
      </div>

    </div>
  )
}

export default About
