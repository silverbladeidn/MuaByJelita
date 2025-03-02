import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gambarHome from "../components/assets/jeje.jpg"; // Sesuaikan lokasi gambar
import "@fontsource/great-vibes";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "../components/Marquee";
import gambarPorto1 from "../components/assets/469386881_1643952486222276_6666707979310403927_n.jpeg"; // Sesuaikan lokasi gambar
import gambarPorto2 from "../components/assets/469476925_1248173543114768_4509618080662925318_n.jpeg"; // Sesuaikan lokasi gambar
import gambarPorto3 from "../components/assets/474976200_17855436792364486_1477771933060891898_n.jpeg"; // Sesuaikan lokasi gambar

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToPortfolio) {
            setTimeout(() => {
                const portfolioSection = document.getElementById("portfolio-section");
                if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
    }, [location]);
    return (
        <div style={{
            padding: "10px 15px", position: "relative", textAlign: "center"
        }}>
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
                top: "24%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "black",
                padding: "14px",
                borderRadius: "10px"
            }}>
                <h1 style={{ paddingLeft: "50px", textAlign: "left", margin: "0", fontFamily: "'Great Vibes', cursive", fontSize: "30px" }}>
                    "Peduli tentang kecantikan, perlu dimulai dengan hati dan jiwa, jika tidak, makeup tidak akan membantu."
                </h1>
                <h2 style={{ paddingLeft: "50px", textAlign: "left", margin: "0", fontSize: "20px" }}>- Coco Chanel -</h2>
                <a
                    href="https://api.whatsapp.com/send?phone=6281297693634"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 10px",
                        backgroundColor: "white",
                        color: "black",
                        border: "2px solid black",
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
                    <FaWhatsapp size={29} /> Book Me!!
                </a>

            </div>

            {/* Marquee */}
            <Marquee />

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ color: "black", fontWeight: "bold" }}>
                    Mengapa Harus MUA by Jelita?
                </h1>
                <p style={{ color: "black", fontSize: "30px" }}>
                    Alasan memilih MUA by Jelita untuk menjaga kecantikanmu :
                </p>
            </div>
            {/* Container Card */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap" // Agar responsif di layar kecil
            }}>
                {/* Card 1 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <h3 style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Makeup Profesional</h3>
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Makeup untuk berbagai acara spesial dengan tampilan yang elegan.</p>
                </div>

                {/* Card 2 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <h3 style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Hasil yang sempurna</h3>
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Dengan hasil yang sempurna dapat membuat aura kecantikanmu menyala.</p>
                </div>

                {/* Card 3 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <h3 style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Harga yang bersahabat</h3>
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>Tidak perlu khawatir dengan harganya karena harganya pun ramah kantong.</p>
                </div>
            </div>

            <div className="border-top border-4 border-dark mt-4"></div>
            <div id="portfolio-section" style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ color: "black", fontWeight: "bold" }}>
                    Lihat Portfolio
                </h1>
                <p style={{ color: "black", fontSize: "30px" }}>
                    Berikut ini adalah hasil testimoni dari MUA by Jelita :
                </p>
            </div>
            {/* Container Card */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap" // Agar responsif di layar kecil
            }}>
                {/* Card 1 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <img
                        src={gambarPorto1}
                        alt="Perawatan Wajah"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "10px"
                        }}
                    />
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px",
                        fontStyle: "italic"
                    }}>"Seneng banget bisa menggunakan jasa MUA by Jelita! Hasilnya pas dan memuaskan."</p>
                </div>

                {/* Card 2 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <img
                        src={gambarPorto2}
                        alt="Perawatan Wajah"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "10px"
                        }}
                    />
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px",
                        fontStyle: "italic"
                    }}>"Mau acara besar apapun seperti pernikahan atau wisuda, MUA by Jelita adalah pilihan terbaik!"</p>
                </div>
                {/* Card 3 */}
                <div style={{
                    width: "300px",
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <img
                        src={gambarPorto3}
                        alt="Perawatan Wajah"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "10px"
                        }}
                    />
                    <p style={{
                        padding: "10px 30px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "10px",
                        fontStyle: "italic"
                    }}>"Ini bener-bener mimpi banget loh! aku dimakeup sama Jelita. Hasilnya wow banget!"</p>
                </div>
            </div>
            <a
                href="https://www.instagram.com/makeupby.jelita"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 30px",
                    backgroundColor: "white",
                    color: "black",
                    border: "2px solid black",
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
                View More
            </a>
        </div>
    );
};

export default Home;
