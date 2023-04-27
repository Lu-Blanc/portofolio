import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#work" className="footer__link">
              Work
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lulufah_"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/fahrul-lah-860931272/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Lu-Blanc"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          Design and Build by Fahrullah | &copy; 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
