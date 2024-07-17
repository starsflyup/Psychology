import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";
import {ContactForm} from "./ContactForm";

export const ContactUs = () => {
  const {t, i18n} = useTranslation();

  return(
    <>
      <div className="flex items-center p-20 justify-center bg-[#7C8CFD] text-white text-center font-alike">
        <div className="relative flex flex-col items-center">
          <h1 className="text-[45px] font-bold mb-2 whitespace-pre-line leading-[1.4]">{t("contactUs.title")}</h1>
          <p className="text-lg">{t("contactUs.par")}</p>
          <div
            style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
            className="mr-4 mt-8 bg-white p-6 rounded-lg border-4 border-[#282656] w-[350px] h-[470px]"
          >
            {/* Heading */}
            <div className="flex flex-col space-y-1.5 pb-6">
              <h2 className="font-semibold text-lg tracking-tight text-white whitespace-pre-line bg-[#43408f] rounded-xl">{t('contactForm.title')}</h2>
            </div>

            {/* Input box */}
            <div className="flex items-center pt-0">
              <form className="flex items-center justify-center w-full flex-col">
                <div className="bg-white py-4 rounded-lg w-full">
                  <div className="relative bg-inherit">
                    <input type="text" id="email" name="email"
                           className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-[#282656] focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                           placeholder={t('contactForm.email')}/>
                    <label htmlFor="email"
                           className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('contactForm.email')}</label>
                  </div>
                </div>
                <div className="bg-white py-4 rounded-lg w-full">
                  <div className="relative bg-inherit">
                  <textarea
                    id="message"
                    name="message"
                    className="peer bg-transparent h-48 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-[#282656] focus:ring-sky-600 focus:outline-none focus:border-rose-600 pt-1 resize-none"
                    placeholder={t('contactForm.message')}
                  />
                    <label
                      htmlFor="message"
                      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    >
                      {t('contactForm.message')}
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-[#43408f] hover:bg-[#282656] h-10 w-full px-4 py-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center flex-col">
          <img src="/Images/contactus.png" alt="Hands" className="w-[30rem]" />
          <div className='flex justify-evenly w-[24rem]'>
            <a href="#"><img src="/Images/facebook.png" alt="fb" className='w-[4.5rem]'/></a>
            <a href="#"><img src="/Images/insta.png" alt="insta" className='w-[4.5rem]'/></a>
            <a href="#"><img src="/Images/linkedin.png" alt="linkedin" className='w-[4.5rem]'/></a>
            <a href="#"><img src="/Images/mail.png" alt="mail" className='w-[4.5rem]'/></a>
          </div>
        </div>
      </div>
    </>
  )
}