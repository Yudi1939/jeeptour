import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Kendaraan = () => {
    const [vehicle, setVehicle] = useState({
        model: '',
        license_plate: '',
        year: ''
    });
    const [initialVehicle, setInitialVehicle] = useState(null); // Menyimpan data awal dari API
    const navigate = useNavigate();

    // Ambil id_driver dari localStorage
    let session = localStorage.getItem('user');
    let sessionUsername = '';
    let idDriver = '';
    if (session) {
        try {
            session = JSON.parse(session);
            sessionUsername = session.username || '';
            idDriver = session.id; // Mengambil ID driver dari sesi
        } catch (e) {
            console.error("Error parsing session data", e);
        }
    }

    // Mengambil data kendaraan berdasarkan id_driver
    useEffect(() => {
        if (idDriver) {
            fetch(`/api/kendaraan?id_driver=${idDriver}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Gagal mengambil data kendaraan");
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        setVehicle(data.data); // Mengatur data kendaraan yang didapat dari API
                        setInitialVehicle(data.data); // Menyimpan data awal dari API
                    } else {
                        console.error(data.message);
                    }
                })
                .catch(error => console.error('Error fetching vehicle data:', error));
        }
    }, [idDriver]);

    const handleChange = (e) => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/kendaraan', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...vehicle, id_driver: idDriver }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Gagal memperbarui data kendaraan");
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    alert('Data kendaraan berhasil diperbarui');
                    navigate('/driver'); // Arahkan ke halaman /driver setelah berhasil menyimpan
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error updating vehicle data:', error));
    };

    const handleCancel = () => {
        navigate('/driver'); // Arahkan ke halaman /driver ketika membatalkan
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-white'>
            <div className='text-center mb-8'>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Data Kendaraan</h2>
                <p className='text-lg font-medium text-gray-600'>Selamat Datang, {sessionUsername}</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200 space-y-4">
                <div>
                    <label className="block text-gray-800 mb-1">Model</label>
                    <input
                        type="text"
                        name="model"
                        value={vehicle.model || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 text-gray-800 focus:border-blue-400 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-800 mb-1">License Plate</label>
                    <input
                        type="text"
                        name="license_plate"
                        value={vehicle.license_plate || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 text-gray-800 focus:border-blue-400 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-800 mb-1">Year</label>
                    <input
                        type="number"
                        name="year"
                        value={vehicle.year || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 text-gray-800 focus:border-blue-400 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="flex space-x-4">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 w-1/2">Simpan</button>
                    <button type="button" onClick={handleCancel} className="bg-red-500 text-white p-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 w-1/2">Batalkan</button>
                </div>
            </form>
        </div>
    );
}

export default Kendaraan;