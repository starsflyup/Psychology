import React from 'react';
import '../Styles/Navbar.css'
import {Navbar} from "./Navbar";

export const AboutUs = () => {

  return(
    <div className="bg-[#7C8CFD] dark:bg-white flex relative z-20 items-center">
      <div className="container mx-auto px-6 flex flex-col relative py-16 items-center">
        <h1 className='font-alike text-white text-4xl'>Pattug is  an online platform that aims to connect clients and therapist ......</h1>
        <h3 className='font-alike text-white text-4xl mt-80'>Give yourself a hug.</h3>
        <img src='/Images/LogoArm.png' alt='hug' className='w-[157px] mt-8'/>
      </div>
    </div>
  )
}