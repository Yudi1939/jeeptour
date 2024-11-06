import React, { useEffect, useState } from 'react';

const Pesanan = () => {
    const [pesanan, setPesanan] = useState([]);

    useEffect(() => {
        fetch('/api/pesanan') // Sesuaikan endpoint API
            .then(response => response.json())
            .then(data => setPesanan(data))
            .catch(error => console.error('Error fetching pesanan data:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Daftar Pesanan</h2>
                {pesanan.length > 0 ? (
                    <table className="w-full text-left border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-gray-800">
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Tanggal</th>
                                <th className="border px-4 py-2">Total Harga</th>
                                <th className="border px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pesanan.map((order, index) => (
                                <tr key={order.id_transaksi} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2 text-gray-700">{index + 1}</td>
                                    <td className="border px-4 py-2 text-gray-700">{order.tanggal}</td>
                                    <td className="border px-4 py-2 text-gray-700">Rp{order.total_harga}</td>
                                    <td className="border px-4 py-2 text-gray-700">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-600 text-center mt-4">Belum ada pesanan.</p>
                )}
            </div>
        </div>
    );
}

export default Pesanan;