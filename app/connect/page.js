import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import todo from '../../public/projects/todo.png';
const Connect = () => {
    return (
        <div className=' w-full lg:px-20 ' >

            <h1 className=' text-4xl p-5 font-bold '>Connect With Me</h1>

            <div className='w-full h-full flex justify-center'>

                <div className="flex w-full border rounded-lg h-full justify-center gap-8 p-5 flex-wrap ">

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <Image className="p-8 rounded-t-lg" src={todo} alt="product image"></Image>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-2">Resume</h5>
                            </a>
                            
                            <div className="flex items-center justify-end">
                                
                                <a href="https://drive.google.com/file/d/1G6lkdxCgRJlyqSQyVmqrHjQsRXIz9sMj/view?usp=sharing" target='_blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Connect
