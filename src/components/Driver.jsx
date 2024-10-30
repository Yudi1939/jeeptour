import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt, faHistory, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Driver = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [orders, setOrders] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const ordersRes = await fetch('https://api.example.com/orders').then(res => res.json());
      const scheduleRes = await fetch('https://api.example.com/schedule').then(res => res.json());
      const historyRes = await fetch('https://api.example.com/history').then(res => res.json());

      setOrders(ordersRes);
      setSchedule(scheduleRes);
      setHistory(historyRes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg p-4">
        <h1 className="text-white text-xl font-bold text-center">JeepTour</h1>
      </header>

      {/* Selamat Datang */}
      <section className="mt-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-700">Selamat Datang, Driver!</h2>
        <p className="text-gray-500">Kelola pesanan, jadwal tour, dan riwayat perjalanan Anda dengan mudah.</p>
      </section>

      {/* Layout Komponen */}
      <div className="container mx-auto px-8 py-8 space-y-8">
        {/* Pesanan Customer dan Jadwal Tour */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            icon={faClipboardList}
            title="Pesanan Customer"
            data={orders}
            columns={["ID", "Nama", "Status"]}
            onClick={() => openModal('orders')}
          />
          <Card 
            icon={faCalendarAlt}
            title="Jadwal Tour"
            data={schedule}
            columns={["ID", "Tanggal", "Lokasi"]}
            onClick={() => openModal('schedule')}
          />
        </div>

        {/* Riwayat */}
        <Card 
          icon={faHistory}
          title="Riwayat"
          data={history}
          columns={["ID", "Rating", "Ulasan"]}
          onClick={() => openModal('history')}
          fullWidth
        />
      </div>

      {/* Tombol Pesan Mengambang */}
      <FloatingButton icon={faCommentDots} onClick={() => openModal('message')} />

      {/* Modal */}
      {activeModal && (
        <Modal type={activeModal} closeModal={closeModal} />
      )}
    </div>
  );
};

// Komponen Kartu dengan Tabel Singkat
const Card = ({ icon, title, data, columns, onClick, fullWidth }) => (
  <div
    className={`bg-white shadow-md hover:shadow-lg p-6 rounded-lg cursor-pointer transition duration-300 ${
      fullWidth ? 'col-span-2' : ''
    }`}
    onClick={onClick}
  >
    <div className="flex items-center mb-4">
      <FontAwesomeIcon icon={icon} className="text-green-600 text-4xl mr-4" />
      <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
    </div>
    {/* Tabel Singkat */}
    <table className="w-full text-left">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="border-b-2 p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 3).map((item, idx) => (
          <tr key={idx}>
            {columns.map((col, i) => (
              <td key={i} className="p-2 border-b">{item[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Tombol Mengambang
const FloatingButton = ({ icon, onClick }) => (
  <button
    className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} className="text-2xl" />
  </button>
);

// Modal untuk menampilkan detail komponen
const Modal = ({ type, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4 capitalize">{type}</h2>
      <p className="text-gray-600 mb-4">
        Ini adalah detail dari {type}. Anda bisa memuat data lebih lanjut di sini.
      </p>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        onClick={closeModal}
      >
        Tutup
      </button>
    </div>
  </div>
);

export default Driver;
