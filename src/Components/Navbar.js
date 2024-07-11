import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";
import LangSwitch from "./LangSwitch";

export const Navbar = () => {
  const {t, i18n} = useTranslation();

  return(
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-white dark:text-white font-black text-3xl">
          <img src={t("logo.src")} alt="Logo" className='w-[200px]'/>
        </div>
        <div className="flex items-center">
          <nav className="font-alike text-white text-[16px] dark:text-white uppercase text-lg lg:flex items-center hidden">
            <a href="#" className="py-2 px-6 flex hover:text-[#362D64]">
              {t("nav.find")}
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-[#362D64]">
              {t("nav.blog")}
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-[#362D64]">
              {t("nav.join")}
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-[#362D64]">
              {t("nav.contact")}
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-[#362D64]">
              <LangSwitch />
            </a>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
            <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
            <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
          </button>
        </div>
      </div>
    </header>
  )
}