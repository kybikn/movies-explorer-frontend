import React from 'react'
import { Link } from 'react-router-dom';

import './Portfolio.css';
import arrow from '../../images/arrow.svg'


function Portfolio() {
  return (
    <div>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__content'>
        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Статичный сайт</h4>
          <Link to="/">
            <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>
          </Link>
        </li>
        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Адаптивный сайт</h4>
          <Link to="/">
            <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>
          </Link>
        </li>
        <li className='portfolio__link'>
          <h4 className='portfolio__link-title'>Одностраничное приложение</h4>
          <Link to="/">
            <img className="portfolio__link-img" src={arrow} alt="Стрелка"></img>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio