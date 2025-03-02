import React from "react";
import gambarHome from "../components/assets/jeje.jpg"; // Sesuaikan lokasi gambar
import "@fontsource/great-vibes";
import { FaWhatsapp } from "react-icons/fa";


const Service = () => {
    return (
        <div style={{
            padding: "10px 0px", position: "relative", textAlign: "center"
        }}>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h1 style={{ color: "black", fontFamily: "'Great Vibes', cursive" }}>
                    Makeup Service
                </h1>
                <h3 style={{ color: "black", fontWeight: "bold" }}>
                    Jadikan kecantikanmu sebagai inti penampilanmu
                </h3>
                <p style={{ color: "black", fontSize: "20px" }}>
                    Kamu bisa mengklik tombol view pricelist di bawah ini :
                </p>
            </div>
            {/* Gambar Latar Belakang */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src={gambarHome}
                    alt="Gambar Home"
                    style={{ width: "70%", maxWidth: "500%", height: "30%" }}
                />
            </div>

            {/* Teks & Tombol di atas gambar */}
            <div style={{
                position: "absolute",
                top: "64%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px"
            }}>
                <a
                    href="https://api.whatsapp.com/send?phone=6281297693634"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        border: "2px solid black",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 30px",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        gap: "15px", // Jarak antara ikon dan teks
                        fontSize: "16px",
                        transition: "all 0.3s ease-in-out", // Animasi transisi
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "black";
                        e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "black";
                    }}
                >
                <FaWhatsapp size={29} /> View Pricelist
            </a>

        </div>
        </div >
    );
};

export default Service;
