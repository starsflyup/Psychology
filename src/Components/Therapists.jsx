import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingProfile } from "./BookingProfile";

const initialTherapists = [
  { name: 'Sangmu Patel', rate: '$30/session', imgSrc: 'path/to/image1.jpg' },
  { name: 'Guanyu Hsu', rate: '$25/session', imgSrc: 'path/to/image2.jpg' },
  { name: 'Fayroz Rafiq', rate: '$40/session', imgSrc: 'path/to/image3.jpg' },
  { name: 'Easd Aslani', rate: '$12/session', imgSrc: 'path/to/image3.jpg' },
  { name: 'Karim Debayi', rate: '$20/session', imgSrc: 'path/to/image3.jpg' },
];

export const Therapists = () => {
  const { name } = useParams();
  const stateName = "Sangmu Patel";
  const [therapists, setTherapists] = useState(initialTherapists);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    // const matchesFilter = filterRate ? therapist.rate === filterRate : true;
    // return matchesSearch && matchesFilter;
    return matchesSearch;
  });

  const getName = () => {
    switch(name) {
      case stateName:
        return <BookingProfile />;

      default:
        return null;
    }
  }

  return (
    <>
      {getName()}
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-4xl font-bold">Our Therapists</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4 justify-between w-full">
          <button className="flex items-center space-x-2 bg-transparent border-2 border-gray-800 text-gray-800 font-semibold py-1 px-4 rounded-2xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
            </svg>
            <span>Filters</span>
          </button>
          <div className="relative">
            <input
              type="text"
              className="border-2 border-gray-800 rounded-2xl py-1 pl-8 pr-4"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg className="w-5 h-5 text-gray-800 absolute left-2 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4a4 4 0 100 8 4 4 0 000-8zm2 14h4m2 0h6m-6-4h.01M10 10H8m-2 0H4m6 4h.01M8 4H4m6 8h2"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTherapists.map((therapist) => (
          <a href={`/therapists/${therapist.name}`}>
            <div key={therapist.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={therapist.imgSrc} alt={therapist.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#7C8CFD]">{therapist.name}</h2>
                <p className="text-gray-600">{therapist.rate}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

