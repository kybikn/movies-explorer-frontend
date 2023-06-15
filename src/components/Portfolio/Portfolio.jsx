import React from 'react'

import { portfolioLinks } from '../../utils/constants'
import './Portfolio.css';
import arrow from '../../images/arrow.svg'

function Portfolio() {
  return (
    <div>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__content'>
        {portfolioLinks.map((link, index) =>
          <li key={index} className='portfolio__link'>
            <h4 className='portfolio__link-title'>{link.name}</h4>
            <a
              href={`${link.link}`}
              target="_blank"
              rel="noreferrer">
              <img
                className="portfolio__link-img hover"
                src={arrow}
                alt={link.name}>
              </img>
            </a>
          </li>
        )}

      </ul>
    </div>
  )
}

export default Portfolio