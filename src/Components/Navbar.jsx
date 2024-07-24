import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";
import LangSwitch from "./LangSwitch";

export const Navbar = ({page}) => {
  const {t, i18n} = useTranslation();
  const navColor = page==='blog' ? '[#efbc75]' : '[#7C8CFD]';
  // const navTextColor = page==='blog' || page==='therapists' ? '[#7C8CFD]' : page==='therapists' ? '[#7C8CFD]' : '[#7C8CFD]';

  return(
    <header className={`h-24 sm:h-32 flex items-center z-30 w-full bg-${navColor}`}>
      <div className="container mx-auto px-0 flex items-center justify-between">
        <div className="relative right-10">
          <a href="/">
            <img src={t("logo.src")} alt="Logo" className='w-[160px]'/>
          </a>
        </div>
        <div className="flex items-center">
          <nav className="font-alike text-white text-[23px] dark:text-white lg:flex items-center hidden">
            <a href="/therapists" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.find")}
            </a>
            <a href="/blog" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.blog")}
            </a>
            <a href="/joinus" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.join")}
            </a>
            <a href="/contactus" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.contact")}
            </a>
            <a href="/signup" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.signup")}
            </a>
            <a href="#" className="py-2 px-1 flex text-[12px] hover:text-[#362D64] relative bottom-6 left-10">
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