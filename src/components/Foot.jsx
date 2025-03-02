import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToPortfolio = (event) => {
    event.preventDefault(); // Mencegah navigasi default

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToPortfolio: true } });
    } else {
      scrollToPortfolioSection();
    }
  };

  const scrollToPortfolioSection = () => {
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio-section");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay agar elemen sempat dimuat
  };
  return (
    <>
      <div className="border-top border-4 border-dark mt-4"></div>
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 style={{ fontFamily: "'Great Vibes', cursive" }}>Makeup Artist By Jelita</h5>
              <p>
                Memberikan layanan makeup profesional untuk berbagai acara spesial Anda.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Menu</h5>
              <ul className="list-unstyled mb-0">
                <li><Link to="/" className="text-dark text-decoration-none">Home</Link></li>
                <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
                <li><Link to="/service" className="text-dark text-decoration-none">Makeup Service</Link></li>
                <li><a className="text-dark text-decoration-none" href="#portfolio-section" onClick={handleScrollToPortfolio}>
                  Portfolio
                </a></li>
                <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            {/* Follow Us - Menggunakan Icon */}
            <div className="col-lg-3 col-md-6 mb-4 text-center">
              <h5 className="text-uppercase">Follow Us</h5>
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://www.instagram.com/makeupby.jelita" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.tiktok.com/@jellybeansy_" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark text-light">
          &copy; {new Date().getFullYear()} Makeup Artist By Jelita | All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
