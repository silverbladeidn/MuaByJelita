import React from "react";
import gambarHome from "../components/assets/jeje.jpg"; // Sesuaikan lokasi gambar

const About = () => {
  return (
    <div className="px-5 py-10 text-center">
      {/* Judul About Me */}
      <div className="mb-10">
        <h1 className="text-black font-greatVibes text-4xl sm:text-5xl mt-10">
          Tentang Saya
        </h1>
      </div>

      {/* Kontainer Gambar & Teks */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">

        {/* Gambar */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={gambarHome}
            alt="Gambar Home"
            style={{
              width: "100%",
              maxWidth: "850px", // Lebar maksimal di mobile
              height: "auto",
              borderRadius: "10px",
              objectFit: "contain"
            }}
          />
        </div>



        {/* Teks */}
        <div className="w-full md:w-2/3 text-justify px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Jelita Pusparini, seorang perempuan yang saat ini berdomisili di Gorontalo memulai minat dalam Make Up Artist sejak 2024.
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

