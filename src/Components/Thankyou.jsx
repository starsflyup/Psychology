import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";

export const ThankYou = () => {
  const { t } = useTranslation();

  return(
    <div className="bg-[#7C8CFD] dark:bg-white flex relative h-screen z-20 items-center">
      <div className="container mx-auto px-6 flex flex-col relative py-16 items-center">
        <h1 className='font-alike text-white text-4xl whitespace-pre-line'>{t('joinus.thankyou')}</h1>
      </div>
    </div>
  )
}