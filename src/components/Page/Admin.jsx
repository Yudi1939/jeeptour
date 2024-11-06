import React, { useState } from 'react';
import AdminNavBar from '../components/AdminNavBar';

const Admin = () => {
    const [sellers, setSellers] = useState([]);
    const [users, setUsers] = useState([]);
    const [newSeller, setNewSeller] = useState({ name: '', email: '' });
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    const handleAddSeller = () => {
        if (newSeller.name && newSeller.email) {
            setSellers([...sellers, { id: sellers.length + 1, ...newSeller }]);
            setNewSeller({ name: '', email: '' });
        }
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.email) {
            setUsers([...users, { id: users.length + 1, ...newUser }]);
            setNewUser({ name: '', email: '' });
        }
    };

    const handleDeleteSeller = (id) => {
        setSellers(sellers.filter(seller => seller.id !== id));
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavBar />
            <div className="container mx-auto p-6">
                <section className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-blue-800">Selamat Datang, Admin!</h2>
                    <p className="text-gray-600">Akses dan kelola data sistem Anda dengan mudah.</p>
                </section>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Pendaftaran Penjual</h2>
                    <div className="flex flex-col space-y-4 mb-6">
                        <input
                            type="text"
                            placeholder="Nama Penjual"
                            value={newSeller.name}
                            onChange={(e) => setNewSeller({ ...newSeller, name: e.target.value })}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email Penjual"
                            value={newSeller.email}
                            onChange={(e) => setNewSeller({ ...newSeller, email: e.target.value })}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <button onClick={handleAddSeller} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                            Daftar Penjual
                        </button>
                    </div>

                    <h2 className="text-2xl font-semibold mb-2">Monitoring Penjual</h2>
                    <ul className="mb-6">
                        {sellers.map(seller => (
                            <li key={seller.id} className="flex justify-between items-center p-2 border-b">
                                <h3>{seller.name} ({seller.email})</h3>
                                <button onClick={() => handleDeleteSeller(seller.id)} className="text-red-500 hover:underline">
                                    Hapus
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Pendaftaran Pengguna</h2>
                    <div className="flex flex-col space-y-4 mb-6">
                        <input
                            type="text"
                            placeholder="Nama Pengguna"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email Pengguna"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <button onClick={handleAddUser} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                            Daftar Pengguna
                        </button>
                    </div>

                    <h2 className="text-2xl font-semibold mb-2">Monitoring Pengguna</h2>
                    <ul>
                        {users.map(user => (
                            <li key={user.id} className="flex justify-between items-center p-2 border-b">
                                <h3>{user.name} ({user.email})</h3>
                                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:underline">
                                    Hapus
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Admin;