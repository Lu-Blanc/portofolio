import React from "react";
import "./work.css";
import WorkImg from "../../assets/Login.jpg";
import Img from "../../assets/search.jpg";
import Kopi from "../../assets/Screenshot 2023-04-27 093130.png";

const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">My Project</span>
      <div className="about__container container grid">
        <img src={WorkImg} alt="" className="work__img" />
        <div className="about__data">
          <h3 className="work__title">Login</h3>
          <p className="about__description">
            Login & Register use JWT: Node JS, Express, React JS, and Postgres
            (Full-Stack)
          </p>
          <a
            href="https://github.com/Lu-Blanc/LoginFull"
            className="work__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <img src={Img} alt="" className="work__img" />
        <div className="about__data">
          <h3 className="work__title">Search</h3>
          <p className="about__description">
            Website Pencari FILM Menggunakan API Online
          </p>
          <a
            href="https://github.com/Lu-Blanc/SearchApiOnline"
            className="work__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <img src={Kopi} alt="" className="work__img" />
        <div className="about__data">
          <h3 className="work__title">Website</h3>
          <p className="about__description">
            Website Kedai Kopi responsive dengan HTML & CSS
          </p>
          <a
            href="https://github.com/Lu-Blanc/website-kopi"
            className="work__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
