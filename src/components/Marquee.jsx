import React from "react";

const MarqueeText = () => {
    return (
        <div style={{
            width: "100%", 
            maxWidth: "100%",
            overflow: "hidden", 
            background: "#000000",
            padding: "10px 0",
            position: "flex",
            zIndex: "1000" // Pastikan muncul di atas elemen lain
        }}>
            <p style={{
                fontSize: "20px", 
                fontWeight: "bold", 
                color: "white",
                whiteSpace: "nowrap",
                display: "inline-block",
                minWidth: "100%",
                padding: "1px 0",
                lineHeight: "10px", // Tambahkan line-height agar terlihat lebih jelas
                animation: "marquee 10s linear infinite"
            }}>
                Jangan ketinggalan!! Coba make up artist by Jelita! 💄✨
            </p>
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                `}
            </style>
        </div>
    );
};

export default MarqueeText;
