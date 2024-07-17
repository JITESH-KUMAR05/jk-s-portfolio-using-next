'use client'
import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [remove, setRemove] = useState(true)

    useEffect(() => {
        const time = setTimeout(() => {
            setRemove(false)
        }, 1500)
        return () => clearTimeout(time)
    }, [])
    return (
        <div>
            {
                remove &&
                <div className='w-[98.8vw] h-screen absolute top-0 left-0 bg-[#161616] transition-all duration-500 z-10'>
                    <div className="w-full h-full flex items-center justify-center absolute">
                        <div className="z-10 text-5xl w-[350px] h-[50px]relative text-white">
                            <div className='font-semibold relative overflow-hidden animate-span word-spacing'>
                                <span className='textColor'>P</span>
                                <span className='textColor'>O</span>
                                <span className='textColor'>R</span>
                                <span className='textColor'>T</span>
                                <span>F</span>
                                <span>O</span>
                                <span>L</span>
                                <span>I</span>
                                <span>O</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PreLoader
