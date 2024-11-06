import { useState } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate
import axios from "axios";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import Dropdown from "../Elements/Input/Dropdown";

const FormLogin = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [role, setRole] = useState(""); // State untuk menyimpan role yang dipilih
    const [redirect, setRedirect] = useState(null); // State untuk mengontrol redirect

    const handleLogin = async (event) => {
        event.preventDefault();

        // Ambil nilai email dan password dari form
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            // Kirim permintaan ke API login dengan axios
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password,
                role
            });

            // Periksa apakah login berhasil
            if (response.data.success) {
                // Simpan token atau data pengguna yang diperlukan
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("role", role);

                console.log("Login berhasil");

                // Redirect berdasarkan role
                if (role === "Users") {
                    setRedirect("/user"); // Set redirect ke halaman users
                } else if (role === "Driver") {
                    setRedirect("/driver"); // Set redirect ke halaman driver
                }
            } else {
                // Tampilkan pesan error jika login gagal
                setErrorMessage("Email atau password salah.");
            }
        } catch (error) {
            // Tangani kesalahan lainnya, seperti koneksi ke API
            setErrorMessage("Terjadi kesalahan saat login.");
            console.error("Login error:", error);
        }
    };

    return (
        <div>
            {/* Redirect ke halaman berdasarkan role setelah login */}
            {redirect && <Navigate to={redirect} replace />}

            <form onSubmit={handleLogin}>
                <InputForm label="email" type="email" name="email" placeholder="example@gmail.com" />
                <InputForm label="password" type="password" name="password" placeholder="********" />
                
                {/* Dropdown untuk memilih role */}
                <Dropdown onChange={(e) => setRole(e.target.value)} />

                <Button variant="bg-green-500 w-full" type="submit">Login</Button>

                {/* Tampilkan pesan error jika ada */}
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default FormLogin;