import React from 'react'
import { Link } from 'react-router-dom';

import { portfolioLinks } from '../../utils/constants'
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__content'>
        {portfolioLinks.map((link, index) =>
          <li key={index} className='portfolio__item'>
            <Link
              className='portfolio__link hover'
              to={`${link.link}`}
              target="_blank">{link.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Portfolio