'use client'
import React, { useEffect } from 'react'
import  ScrollReveal from 'scrollreveal'

const Scrollreveals = () => {
  useEffect(()=>{
    const scroll = ScrollReveal({
        reset:true,
        distance : '60px',
        duration:2000,
        delay:400,
    });
    scroll.reveal('.aboutinfo',{delay:500,origin:'left'})
    return () => {
      // Clean up ScrollReveal when the component unmounts
      scroll.destroy();
    };
  },[])
}

export default Scrollreveals
