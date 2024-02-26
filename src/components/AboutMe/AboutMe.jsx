import React from "react"

import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";
import photo from "../../images/photo.jpg"


function AboutMe() {
  return (
    <section className="about-me" aria-label="Обо мне">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__description">
          <h3 className="about-me__subtitle">Анастасия</h3>
          <p className="about-me__about">Фронтенд-разработчик, 40 лет</p>
          <p className="about-me__text">Я живу в Москве, закончила факультет Лечебное дело КБГУ. Я - начинающий веб-разработчик с большим интересом к IT-сфере. Я настоящий перфекционист и готова работать дополнительно, чтобы достичь поставленных целей. Мне нравится видеть, как пустая страница превращается в полноценный и интерактивный веб-сайт.</p>
          <a
            className="about-me__link hover"
            href="https://github.com/kybikn"
            target="_blank"
            rel="noreferrer">Github
          </a>
        </div>
        <img className="about-me__img" src={photo} alt="Мое фото"></img>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe