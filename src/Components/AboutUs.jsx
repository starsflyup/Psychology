import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

  return(
    <div className="bg-[#7C8CFD] dark:bg-white flex relative z-20 items-center">
      <div className="container mx-auto px-6 flex flex-col relative py-16 items-center">
        <h1 className='font-alike text-white text-[41px] font-bold mb-8'>{t("aboutus.title")}</h1>
        <p className='font-alike text-white text-[28px] whitespace-pre-line'>{t("aboutus.par")}</p>
        <h3 className='font-alike text-white text-[35px] font-bold mt-20'>{t("aboutus.endTitle")}</h3>
        <img src='/Images/homepage2.png' alt='hug' className='w-[157px] mt-8'/>
      </div>
    </div>
  )
}