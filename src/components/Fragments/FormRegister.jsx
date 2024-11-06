import { useState } from "react";
import axios from "axios";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import Dropdown from "../Elements/Input/Dropdown";
import FileInput from "../Elements/Input/FileInput";

const FormRegister = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        tipe: '',
        password: '',
        confirmPassword: '',
        lokasi: '',
        ktp: null,
    });
    const [ktpPreview, setKtpPreview] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, ktp: file });
        setKtpPreview(URL.createObjectURL(file));
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        const { username, email, tipe, password, confirmPassword, lokasi, ktp } = formData;

        if (!username || !email || !tipe || !password || !confirmPassword || !lokasi || !ktp) {
             setErrorMessage("Semua field harus diisi.");
             return;
         }

        if (password !== confirmPassword) {
            setErrorMessage("Password dan konfirmasi password tidak cocok.");
            return;
        }

        const data = new FormData();
        data.append("username", username);
        data.append("email", email);
        data.append("tipe", tipe);
        data.append("password", password);
        data.append("lokasi", lokasi);
        data.append("ktp", ktp);

        try {
            const response = await axios.post("http://localhost:3000/register", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            if (response && response.data && response.data.success) {
                setSuccessMessage("Registrasi berhasil. Silakan login.");
                setErrorMessage("");
                setFormData({
                    username: '',
                    email: '',
                    tipe: '',
                    password: '',
                    confirmPassword: '',
                    lokasi: '',
                    ktp: null,
                });
                setKtpPreview(null);
            } else if (response && response.data && response.data.message) {
                setErrorMessage(response.data.message);
            } else {
                setErrorMessage("Registrasi gagal. Silakan coba lagi.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage("Terjadi kesalahan saat registrasi.");
        }
    };

    return (
        <form onSubmit={handleRegister} className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <InputForm
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Insert your name here..."
            />
            <InputForm
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
            />
            <Dropdown
                label="Role"
                name="tipe"
                onChange={(e) => setFormData({ ...formData, tipe: e.target.value })}
                options={[
                    { value: "User", label: "User" },
                    { value: "Driver", label: "Driver" }
                ]}
                value={formData.tipe}
            />
            <InputForm
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
            />
            <InputForm
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
            />
            <FileInput
                label="Upload KTP"
                name="ktp"
                onChange={handleFileChange}
            />
            {ktpPreview && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500">Pratinjau KTP:</p>
                    <img src={ktpPreview} alt="Preview KTP" className="w-32 h-32 object-cover mt-2 border rounded" />
                </div>
            )}
            <InputForm
                label="Lokasi"
                type="text"
                name="lokasi"
                value={formData.lokasi}
                onChange={handleChange}
                placeholder="Insert your location here..."
            />

            <Button variant="bg-green-500 w-full" type="submit">Register</Button>

            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </form>
    );
};

export default FormRegister;