import React from "react";
import gambarHome from "../components/assets/jeje.jpg"; // Sesuaikan lokasi gambar

const About = () => {
  return (
    <div style={{ padding: "50px 10px", textAlign: "center" }}>

      {/* Judul About Me */}
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{
          color: "black",
          fontFamily: "'Great Vibes', cursive",
          fontSize: "60px",
          marginTop: "100px"
        }}>
          Tentang Saya
        </h1>
      </div>

      {/* Kontainer Gambar & Teks (Dua Kolom) */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>

        {/* Gambar */}
        <div style={{
          flex: "1",
          textAlign: "center",
          maxWidth: "300px",
          display: "flex",
          justifyContent: "right"
        }}>
          <img
            src={gambarHome}
            alt="Gambar Home"
            style={{
              width: "400%",
              maxWidth: "400px", // Batasi ukuran maksimal gambar
              height: "auto",
              borderRadius: "10px",
              objectFit: "contain" // Pastikan gambar tidak melampaui batas div
            }}
          />
        </div>


        {/* Teks */}
        <div style={{
          flex: "2",
          textAlign: "justify",
          maxWidth: "400px"
        }}>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
            Jelita Pusparini, seorang perempuan yang berdomisili Bekasi yang mulai minat dalam Make Up Artist sejak 2024. 
            Jelita ini telah tersertifikasi sebagai Make Up Artist dengan mengikuti beberapa seminar dan kelas terkait 
            bidang yang diminatinya. Banyak pelanggan yang merasa puas atas hasil Make Up Jelita dan hasilnya dipasang 
            sebagai portofolio Jelita.
          </p>
        </div>

      </div>
    </div>

  );
};

export default About;
