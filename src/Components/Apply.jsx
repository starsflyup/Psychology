import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

export const Apply = () => {
  const { t } = useTranslation();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [currency, setCurrency] = useState('amd');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'russian', label: 'Русский' },
    { value: 'armw', label: 'Արեւմտահայերէն' },
    { value: 'arme', label: 'Արևելահայերեն' },
  ];

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setSelectedLanguages(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(lang => lang !== value)
        : [...prevSelected, value]
    );
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('universityDiploma').addEventListener('change', function() {
      document.getElementById('universityDiplomaName').textContent = this.files[0] ? this.files[0].name : 'Choose a file...';
    });
    document.getElementById('trainingCertifications').addEventListener('change', function() {
      document.getElementById('trainingCertificationsName').textContent = this.files[0] ? this.files[0].name : 'Choose a file...';
    });
  });

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <form className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.firstName')}/>
              <label htmlFor="username"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.firstName')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.lastName')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.lastName')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.phoneNumber')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.phoneNumber')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.email')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.email')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.password')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.password')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="file" id="universityDiploma" name="universityDiploma"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 opacity-0 absolute top-0 left-0"
                     placeholder=" " />
              <label htmlFor="universityDiploma"
                     className="absolute cursor-pointer left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.universityDiploma')}</label>
              <div className="peer h-10 w-full rounded-lg ring-2 ring-gray-500 focus-within:ring-sky-600 focus-within:border-rose-600 flex items-center px-2">
                <span className="text-gray-500" id="universityDiplomaName">{t('applicationForm.chooseFile')}</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="file" id="trainingCertifications" name="trainingCertifications"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 opacity-0 absolute top-0 left-0"
                     placeholder=" " />
              <label htmlFor="trainingCertifications"
                     className="absolute cursor-pointer left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.trainingCertifications')}</label>
              <div className="peer h-10 w-full rounded-lg ring-2 ring-gray-500 focus-within:ring-sky-600 focus-within:border-rose-600 flex items-center px-2">
                <span className="text-gray-500" id="trainingCertificationsName">{t('applicationForm.chooseFile')}</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">{t('applicationForm.languages')}</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              {languageOptions.map(option => (
                <div key={option.value} className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    value={option.value}
                    onChange={handleLanguageChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">{option.label}</label>
                </div>
              ))}
              </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input type="text" id="username" name="username"
                       className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                       placeholder={t('applicationForm.languagesOther')}/>
                <label htmlFor="username"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.languagesOther')}</label>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-grow bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input type="number" id="amount" name="amount"
                       className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                       placeholder={t('applicationForm.chargePerSession')}/>
                <label htmlFor="amount"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.chargePerSession')}</label>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <div className="relative bg-inherit">
                <select
                  id="currency"
                  name="currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                  className="peer bg-transparent h-10 w-[90px] rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="">
                  <option value="" disabled selected hidden></option>
                  <option value="amd">AMD</option>
                  <option value="usd">USD</option>
                </select>
                <label htmlFor="currency"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Currency</label>
              </div>
            </div>

          </div>
          <p className="text-gray-600">{t('applicationForm.paymentNote')}</p>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.refuseDemographics')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.refuseDemographics')}</label>
            </div>
          </div>
          <a href="/joinus/thankyou">
            <button className="bg-[#7EC6AD] hover:bg-[#6dad97] w-[140px] h-[54px] text-white font-bold py-2 px-4 rounded-xl mt-10">
              {t('joinus.applyButton')}
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};
