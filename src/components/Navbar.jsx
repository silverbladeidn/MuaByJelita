import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Makeup Artist By Jelita</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">Makeup Service</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio-section" onClick={handleScrollToPortfolio}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
