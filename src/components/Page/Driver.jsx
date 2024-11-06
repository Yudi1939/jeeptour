import React from 'react';
import { Link } from 'react-router-dom';

const Driver = () => {
    let session = localStorage.getItem('user');
    let sessionUsername = '';
    if (session) {
        try {
            session = JSON.parse(session);
            sessionUsername = session.username || '';
        } catch (e) {
            console.error("Error parsing session data", e);
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen bg-white'>
                <div id='header' className='text-center mb-8'>
                    <h1 className='text-4xl font-extrabold text-gray-800 mb-2'>JeepTour - Driver</h1>
                    <p className='text-lg font-medium text-gray-600'>Selamat Datang, {sessionUsername}</p>
                </div>
                
                <div className='w-full max-w-md mx-auto flex flex-col space-y-4'>
                    <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Link to="/kendaraan" className='block px-6 py-4 text-center'>Kendaraan</Link>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Link to="/pesanan" className='block px-6 py-4 text-center'>Pesanan</Link>
                    </div>
                    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Link to="/riwayat" className='block px-6 py-4 text-center'>Riwayat</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Driver;