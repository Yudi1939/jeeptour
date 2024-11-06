import React, { useEffect, useState } from 'react';

const Riwayat = () => {
    const [riwayat, setRiwayat] = useState([]);
    const id_driver = 1; // ID driver yang login, bisa didapat dari session atau localStorage

    useEffect(() => {
        fetch(`/api/riwayat?id_driver=${id_driver}`) // Sesuaikan endpoint API
            .then(response => response.json())
            .then(data => setRiwayat(data))
            .catch(error => console.error('Error fetching review data:', error));
    }, [id_driver]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Riwayat Ulasan</h2>
                {riwayat.length > 0 ? (
                    <table className="w-full text-left border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-gray-800">
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Username</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Bintang</th>
                                <th className="border px-4 py-2">Ulasan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {riwayat.map((review, index) => (
                                <tr key={review.id_review} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2 text-gray-700">{index + 1}</td>
                                    <td className="border px-4 py-2 text-gray-700">{review.username}</td>
                                    <td className="border px-4 py-2 text-gray-700">{review.email}</td>
                                    <td className="border px-4 py-2 text-gray-700">{review.bintang}</td>
                                    <td className="border px-4 py-2 text-gray-700">{review.ulasan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-600 text-center mt-4">Belum ada riwayat ulasan.</p>
                )}
            </div>
        </div>
    );
}

export default Riwayat;