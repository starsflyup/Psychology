import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
  }

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 m-0 cursor-pointer bg-none p-0 z-[999]"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        data-state={isOpen ? 'open' : 'closed'}
        onClick={toggleChatWindow}
      >
        <img src="/Images/Pattug.png" alt="button" className='w-28' />
      </button>

      {isOpen && (
        <div
          ref={chatWindowRef}
          style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
          className="fixed bottom-[calc(6rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border-4 border-[#045383] w-[350px] h-[470px] z-[999]"
        >
          {/* Heading */}
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight text-white whitespace-pre-line bg-[#43408f] rounded-xl">{t('contactForm.title')}</h2>
          </div>

          {/* Input box */}
          <div className="flex items-center pt-0">
            <form className="flex items-center justify-center w-full flex-col" onSubmit={handleSendMessage}>
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
                {t('contactForm.sendButton')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
