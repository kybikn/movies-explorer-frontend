import React from 'react'
import './Portfolio.css';
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__content'>
        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Статичный сайт</h4>
          <Link to="/"
          ><img src={arrow} alt="Стрелка" className="portfolio__link-img"></img></Link>
        </li>

        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Адаптивный сайт</h4>
          <Link to="/"
          ><img src={arrow} alt="Стрелка" className="portfolio__link-img"></img></Link>
        </li>

        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Одностраничное приложение</h4>
          <Link to="/"
          ><img src={arrow} alt="Стрелка" className="portfolio__link-img"></img></Link>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio