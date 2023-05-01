import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/lulufah_/"
        className="home__social"
        target="_blank"

        // penggunaan ini agak mencegah terjadinya phising
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/fahrul-lah-860931272/"
        className="home__social"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/Lu-Blanc"
        className="home__social"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
