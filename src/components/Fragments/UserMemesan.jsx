import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const UserMemesan = () => {
  const dummyJeepList = [
    { id: 1, name: 'Jeep Wrangler', price: 'Rp 500,000', rating: 4, image: 'https://placehold.co/200x100' },
    { id: 2, name: 'Jeep Cherokee', price: 'Rp 600,000', rating: 5, image: 'https://placehold.co/200x100' },
    { id: 3, name: 'Jeep Compass', price: 'Rp 550,000', rating: 3, image: 'https://placehold.co/200x100' },
    { id: 4, name: 'Jeep Gladiator', price: 'Rp 650,000', rating: 4, image: 'https://placehold.co/200x100' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Jeep Listings */}
      <section className="mt-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyJeepList.map((jeep) => (
          <div key={jeep.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <img src={jeep.image} alt={jeep.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">{jeep.name}</h3>
            <p className="text-gray-500">Rental Price: {jeep.price} / day</p>
            <p className="flex items-center text-yellow-500 mb-2">
              {[...Array(jeep.rating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
              Pesan
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p>&copy; {new Date().getFullYear()} Jeep Tour. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#support" className="hover:underline">Support</a>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default UserMemesan;