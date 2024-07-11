import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value);
  }


  return (
    <div className="relative inline-block bg-transparent border-4 border-white rounded-lg text-white font-bold">
      <select
        value={language}
        onChange={handleChange}
        className="appearance-none bg-transparent border-none text-white font-bold py-0 pl-4 pr-12 rounded-lg focus:outline-none"
      >
        <option value="en">{t('lang.en')}</option>
        <option value="ru">{t('lang.ru')}</option>
        <option value="amw">{t('lang.amw')}</option>
        <option value="ame">{t('lang.ame')}</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none pl-[8px] border-white border-l-4">
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
