import React from 'react'
import './AboutMe.css';
import photo from '../../images/photo.jpg'
import Portfolio from '../Portfolio/Portfolio';


function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__description'>
          <h3 className='about-me__subtitle'>Виталий</h3>
          <p className='about-me__text_l'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text_m'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className='about-me__text_s'>Github</p>
        </div>
        <div>
          <img src={photo} alt="Мое фото" className="about-me__img"></img>
        </div>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe