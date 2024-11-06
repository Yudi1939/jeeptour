import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const JeepLayOut = () => {
  const [jeepList, setJeepList] = useState([]);

  useEffect(() => {
    fetchJeeps();
  }, []);

  const fetchJeeps = async () => {
    try {
      const response = await fetch('api/jeep/');
      const data = await response.json();
      setJeepList(data);
    } catch (error) {
      console.error('Error fetching jeeps:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold text-gray-800">Jeep Rentals</h1> */}
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search jeeps..."
            className="border border-gray-300 rounded-full px-4 py-2"
          />
          <button className="bg-green-500 text-white p-2 rounded-full align-middle">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-extrabold">Ayo Jelajahi Wisata Alam Bersama Jeep Tour!</h2>
        <p className="mt-4 text-lg">a Jeep for your next adventure</p>
        <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full font-semibold">
          Mulai Pesan Sekarang 
        </button>
      </section>

    </div>
  );
};

export default JeepLayOut;