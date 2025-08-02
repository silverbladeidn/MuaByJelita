import gambarPorto1 from "../components/assets/469386881_1643952486222276_6666707979310403927_n.jpeg";
import gambarPorto2 from "../components/assets/469476925_1248173543114768_4509618080662925318_n.jpeg";
import gambarPorto3 from "../components/assets/474976200_17855436792364486_1477771933060891898_n.jpeg"; import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import gambarHome from "../components/assets/jeje.jpg";
import "@fontsource/great-vibes";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "../components/Marquee";

const Home = () => {
    const location = useLocation();
    const [portfolioData, setPortfolioData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch portfolio data from API
    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://bemua.aribiya.com/api/portfolio' || 'http://localhost:8000/api/portfolio');
                console.log('API Response:', response.data); // Debug log

                // Sesuaikan dengan struktur response API
                if (response.data && response.data.success) {
                    // Jika data adalah array
                    if (Array.isArray(response.data.data)) {
                        setPortfolioData(response.data.data);
                    }
                    // Jika data adalah object tunggal, bungkus dalam array
                    else if (response.data.data) {
                        setPortfolioData([response.data.data]);
                    }
                    else {
                        setPortfolioData([]);
                    }
                } else {
                    setPortfolioData([]);
                }
                setError(null);
            } catch (err) {
                console.error('Error fetching portfolio data:', err);
                setError(`Gagal memuat data portfolio dari API: ${err.message}`);
                setPortfolioData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolioData();
    }, []);

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
        <div style={{ padding: "10px", textAlign: "center" }}>
            {/* Gambar Latar Belakang */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src={gambarHome}
                    alt="Gambar Home"
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        borderRadius: "10px"
                    }}
                />
            </div>

            {/* Teks & Tombol di atas gambar */}
            <div style={{
                marginTop: "20px",
                textAlign: "center",
                color: "black",
                padding: "10px"
            }}>
                <h1 style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "24px",
                    padding: "0 10px"
                }}>
                    "Peduli tentang kecantikan, perlu dimulai dengan hati dan jiwa, jika tidak, makeup tidak akan membantu."
                </h1>
                <h2 style={{ fontSize: "16px", margin: "5px 0" }}>- Coco Chanel -</h2>
                <a
                    href="https://api.whatsapp.com/send?phone=6281297693634"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "white",
                        color: "black",
                        border: "2px solid black",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        gap: "10px",
                        fontSize: "14px",
                        transition: "all 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "green";
                        e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "black";
                    }}
                >
                    <FaWhatsapp size={20} /> Book Me!!
                </a>
            </div>

            {/* Marquee */}
            <Marquee />

            {/* Mengapa Harus MUA by Jelita */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ color: "black", fontWeight: "bold" }}>Mengapa Harus MUA by Jelita?</h1>
                <p style={{ color: "black", fontSize: "18px" }}>Alasan memilih MUA by Jelita untuk menjaga kecantikanmu :</p>
            </div>

            {/* Card Container */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "15px",
                marginTop: "20px",
                padding: "10px"
            }}>
                {["Makeup Profesional", "Hasil yang sempurna", "Harga yang bersahabat"].map((title, index) => (
                    <div key={index} style={{
                        backgroundColor: "#2f2f2f",
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        textAlign: "center"
                    }}>
                        <h3 style={{ color: "white", marginBottom: "10px" }}>{title}</h3>
                        <p style={{ color: "white", fontSize: "14px" }}>
                            {index === 0 ? "Makeup untuk berbagai acara spesial dengan tampilan yang elegan."
                                : index === 1 ? "Dengan hasil yang sempurna dapat membuat aura kecantikanmu menyala."
                                    : "Tidak perlu khawatir dengan harganya karena harganya pun ramah kantong."}
                        </p>
                    </div>
                ))}
            </div>

            <div className="border-top border-4 border-dark mt-4"></div>

            {/* Portfolio Section */}
            <div id="portfolio-section" style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ color: "black", fontWeight: "bold" }}>Lihat Portfolio</h1>
                <p style={{ color: "black", fontSize: "18px" }}>Berikut ini adalah hasil testimoni dari MUA by Jelita :</p>
            </div>

            {/* Portfolio Cards with API Integration */}
            {/* Static Portfolio Cards */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "15px",
                marginTop: "20px",
                padding: "10px"
            }}>
                {[gambarPorto1, gambarPorto2, gambarPorto3].map((img, index) => (
                    <div key={index} style={{
                        backgroundColor: "#2f2f2f",
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        textAlign: "center"
                    }}>
                        <img
                            src={img}
                            alt="Testimoni"
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginBottom: "10px"
                            }}
                        />
                        <p style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}>
                            {index === 0 ? "Seneng banget bisa menggunakan jasa MUA by Jelita! Hasilnya pas dan memuaskan."
                                : index === 1 ? "Mau acara besar apapun seperti pernikahan atau wisuda, MUA by Jelita adalah pilihan terbaik!"
                                    : "Suka banget sama hasilnya! Pasti akan menggunakan jasa ini lagi!"}
                        </p>
                    </div>
                ))}
            </div>

            {/* Dynamic Portfolio Cards from API */}
            {portfolioData.length > 0 && (
                <>
                    {Array.from({ length: Math.ceil(portfolioData.length / 3) }, (_, rowIndex) => (
                        <div key={rowIndex} style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "15px",
                            marginTop: "20px",
                            padding: "10px"
                        }}>
                            {portfolioData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item, index) => {
                                const actualIndex = rowIndex * 3 + index;
                                return (
                                    <div key={item.id || actualIndex} style={{
                                        backgroundColor: "#2f2f2f",
                                        padding: "15px",
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                        textAlign: "center"
                                    }}>
                                        <img
                                            src={`https://bemua.aribiya.com/uploads/portofolio/${item.gambar_porto}`}
                                            alt={`Portfolio ${item.nama_portfolio || `${actualIndex + 1}`}`}
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                marginBottom: "10px"
                                            }}
                                            onError={(e) => {
                                                console.log('Image load error:', e.target.src);
                                                e.target.src = 'https://via.placeholder.com/80x80?text=MUA';
                                            }}
                                        />
                                        <h4 style={{ color: "white", fontSize: "16px", marginBottom: "8px" }}>
                                            {item.nama_portfolio}
                                        </h4>
                                        <p style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}>
                                            {item.deskripsi || item.testimonial || item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </>
            )}

            {/* Loading and Error states for API */}
            {loading && (
                <div style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "black",
                    marginTop: "20px"
                }}>
                    <p>Loading portfolio terbaru...</p>
                </div>
            )}

            {error && (
                <div style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "red",
                    marginTop: "20px"
                }}>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: "10px",
                            padding: "8px 16px",
                            backgroundColor: "#2f2f2f",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Coba Lagi
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;