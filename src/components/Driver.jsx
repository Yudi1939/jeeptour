import React, { useEffect, useState } from 'react';

const API_URL = 'https://api.trplweb.wefgis-sync.com/api/jeeps';

const Driver = () => {
  const [data, setData] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  // Fetch data dari API
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openModal = (item) => setActiveModal(item);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 p-4">
        <h1 className="text-white text-xl text-center">JeepTour</h1>
      </header>

      {/* Selamat Datang */}
      <section className="mt-6 text-center">
        <h2 className="text-2xl font-bold">Selamat Datang, Driver!</h2>
        <p>Kelola pesanan, jadwal tour, dan riwayat Anda dengan mudah.</p>
      </section>

      {/* Konten */}
      <div className="container mx-auto px-8 py-8 space-y-6">
        {/* Pesanan & Jadwal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Pesanan" data={data} openModal={openModal} />
          <Card title="Jadwal Tour" data={data} openModal={openModal} />
        </div>

        {/* Riwayat */}
        <Card title="Riwayat" data={data} openModal={openModal} fullWidth />
      </div>

      {/* Modal */}
      {activeModal && <Modal item={activeModal} closeModal={closeModal} />}
    </div>
  );
};

// Komponen Kartu
const Card = ({ title, data, openModal, fullWidth }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow ${fullWidth ? 'col-span-2' : ''}`}
    onClick={() => openModal(data[0])} // Klik untuk modal detail pertama
  >
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ul>
      {data.slice(0, 3).map((item, index) => (
        <li key={index} className="border-b py-2">
          {item.nama_pengguna} - {item.status_pemesanan}
        </li>
      ))}
    </ul>
  </div>
);

// Komponen Modal
const Modal = ({ item, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Detail Pesanan</h2>
      <p>Nama Pengguna: {item.nama_pengguna}</p>
      <p>Nomor Telepon: {item.notelp_pengguna}</p>
      <p>Status: {item.status_pemesanan}</p>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={closeModal}
      >
        Tutup
      </button>
    </div>
  </div>
);

export default Driver;